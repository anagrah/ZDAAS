using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Zbizlink.Micro.Enum;
using Zbizlink.MicroCRMDataImport.DataModel.Contracts;
using Zbizlink.MicroCRMDataImport.DataModel.Entities;
using Zbizlink.MicroCRMDataImport.DataModel.Models;

namespace Zbizlink.MicroCRMDataImport.DataModel.Repositories
{
    public class CRMImportActivityTablesRepository<TEntity> : ICRMRepository<TEntity> where TEntity : class
    {
        internal CrmDataImport_DBContext _dbContext;
        internal DbSet<TEntity> _dbSet;
        public CRMImportActivityTablesRepository(CrmDataImport_DBContext dbContext)
        {
            this._dbContext = dbContext;
            this._dbSet = dbContext.Set<TEntity>();
        }
        public virtual void Delete(object id)
        {
            TEntity entityToDelete = _dbSet.Find(id);
            Delete(entityToDelete);
        }
        public IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }
        public virtual TEntity GetByID(object id)
        {

            return _dbSet.Find(id);
        }
        public virtual void Insert(TEntity entity)
        {
            _dbSet.Add(entity);
        }
        public virtual void InsertRange(IEnumerable<TEntity> entity)
        {
            _dbSet.AddRange(entity);
        }
        public virtual void Delete(TEntity entityToDelete)
        {
            if (_dbContext.Entry(entityToDelete).State == EntityState.Detached)
            {
                _dbSet.Attach(entityToDelete);
            }
            _dbSet.Remove(entityToDelete);
        }
        public virtual void Update(TEntity entityToUpdate)
        {
            _dbSet.Attach(entityToUpdate);
            _dbContext.Entry(entityToUpdate).State = EntityState.Modified;
        }
        public virtual IEnumerable<TEntity> Get()
        {
            // DbSet<Rfpdocument> doc;
            //var t = doc.Where(t => t.DocName == "");

            IQueryable<TEntity> query = _dbSet;
            return query.ToList();
        }
        public IQueryable<TEntity> GetQuery()
        {
            return this._dbSet;
        }
        public virtual IQueryable<IEnumerable<string>> ProjectionQuery(Expression<Func<TEntity, bool>> where,
                                    Expression<Func<TEntity, IEnumerable<string>>> selector)
        {

            IQueryable<TEntity> query = _dbSet;

            return query.Where(where).Select(selector);
        }
        public ICollection<TType> GetSelectedColumn<TType>(Expression<Func<TEntity, TType>> select) where TType : class
        {
            return _dbSet.Select(select).ToList();
        }
        public ICollection<TType> GetSelectedColumnWithWhere<TType>(Expression<Func<TEntity, bool>> where,
            Expression<Func<TEntity, TType>> select) where TType : class
        {

            return _dbSet.Where(where).Select(select).ToList();
        }
        public IQueryable<TType> GetSelectedColumnWithWhereQ<TType>(Expression<Func<TEntity, bool>> where,
            Expression<Func<TEntity, TType>> select) where TType : class
        {
            IQueryable<TEntity> query = _dbSet;
            return query.Where(where).Select(select);
        }
        public virtual IEnumerable<TEntity> GetParentDetail(String childEntity)
        {

            return _dbSet.Include(childEntity).ToList();
        }

        public IQueryable<TEntity> GetWithInclude(
            System.Linq.Expressions.Expression<Func<TEntity,
            bool>> predicate, params string[] include)
        {
            IQueryable<TEntity> query = this._dbSet;
            query = include.Aggregate(query, (current, inc) => current.Include(inc));
            return query.Where(predicate);
        }

        public bool Exists(object primaryKey)
        {
            return _dbSet.Find(primaryKey) != null;
        }

        public TEntity GetSingle(Func<TEntity, bool> predicate)
        {

            return _dbSet.Single<TEntity>(predicate);
        }

        public TEntity GetFirst(Func<TEntity, bool> predicate)
        {
            try
            {
                return _dbSet.First<TEntity>(predicate);
            }
            catch (Exception ex)
            {
                var e = ex.Message;
            }

            return _dbSet.First<TEntity>(predicate);
        }

        #region  Private mathod
        private List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        private T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                    {
                        var value = dr[column.ColumnName].ToString();
                        if (value != "")
                        {
                            pro.SetValue(obj, dr[column.ColumnName], null);
                        }

                    }
                    else
                        continue;
                }
            }
            return obj;
        }
        #endregion
        private SqlDbType RetunSqlDbType(DatabaseDataTypes type)
        {
            switch (type)
            {
                case 0:
                    return SqlDbType.Decimal;

            }

            return SqlDbType.VarChar;
        }
        public List<T> ExecuteStoredProcedure<T>(string stroredProcedureName, T model, List<DataBaseParameter> dbParameterList)
        {

            List<T> list = null;
            DataTable dataTable = new DataTable();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this._dbContext.Database.GetDbConnection();
            if (connection.State == ConnectionState.Closed)
            {
                connection.Open();
            }

            using (var command = connection.CreateCommand())
            {
                if (dbParameterList.Count > 0)
                {
                    foreach (var dbParameter in dbParameterList)
                    {
                        command.Parameters.Add(dbParameter.DBParameterName, RetunSqlDbType(dbParameter.DBParameterType)).SqlValue = dbParameter.DBParameterValue;

                    }
                }

                command.CommandText = stroredProcedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;

                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = command;

                da.Fill(dataTable);

                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
                list = ConvertDataTable<T>(dataTable);

            }
            //}

            return list;
        }

        public int ExecuteStoredProcedure(string stroredProcedureName, List<DataBaseParameter> dbParameterList)
        {
            int result = 0;

            DataTable dataTable = new DataTable();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this._dbContext.Database.GetDbConnection();
            if (connection.State == ConnectionState.Closed)
            {
                connection.Open();
            }

            using (var command = connection.CreateCommand())
            {
                if (dbParameterList.Count > 0)
                {
                    foreach (var dbParameter in dbParameterList)
                    {
                        command.Parameters.Add(dbParameter.DBParameterName, RetunSqlDbType(dbParameter.DBParameterType)).SqlValue = dbParameter.DBParameterValue;

                    }
                }

                command.CommandText = stroredProcedureName;
                command.Connection = connection;
                command.CommandType = CommandType.StoredProcedure;
                result = command.ExecuteNonQuery();

                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
                // list = ConvertDataTable<T>(dataTable);

            }
            //}

            return result;
        }
    }
}
