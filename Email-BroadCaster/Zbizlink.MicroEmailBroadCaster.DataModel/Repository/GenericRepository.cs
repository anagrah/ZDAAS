 
using System;
using System.Collections.Generic; 
using System.Linq;
using System.Linq.Expressions;
using System.Reflection; 

using Zbizlink.MicroEmailBroadCaster.DataModel.StoreProcedure;
using Zbizlink.MicroEmailBroadCaster.DataModel.Enum; 
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.SqlClient;
using Zbizlink.MicroEmailBroadCaster.DataModel.DBContext;

namespace Zbizlink.MicroEmailBroadCaster.DataModel.Repository
{
    public class GenericRepository<TEntity> where TEntity : class
    {

        internal EmailBroadCasterContext Context;
        internal DbSet<TEntity> DbSet;

        public GenericRepository(EmailBroadCasterContext context)
        {

            this.Context = context;
            this.DbSet = context.Set<TEntity>();
        }



        public virtual IEnumerable<TEntity> Get()
        {
            // DbSet<Rfpdocument> doc;
            //var t = doc.Where(t => t.DocName == "");

            IQueryable<TEntity> query = DbSet;
            return query.ToList();
        }

        #region it is test method

        public List<T> ExecuteStoredProcedure<T>(string stroredProcedureName, T model, List<DatabaseParameter> dbParameterList)
        {

            List<T> list = null;
            DataTable dataTable = new DataTable();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this.Context.Database.GetDbConnection();
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

        public int ExecuteStoredProcedure(string stroredProcedureName, List<DatabaseParameter> dbParameterList)
        {
            int result = 0;

            DataTable dataTable = new DataTable();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this.Context.Database.GetDbConnection();
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

        public DataSet ExecuteStoredProcedureTemp(string stroredProcedureName, List<DatabaseParameter> dbParameterList)
        {
            DataSet ds = new DataSet();

            DataTable dataTable = new DataTable();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this.Context.Database.GetDbConnection();
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

                //da.Fill(dataTable);

                da.Fill(ds);
                var tables = ds.Tables;
                var Opportunity = tables[0];
                var RFPDocument = tables[0];
                var RFPCategoryData = tables[0];
                var RFPSummary = tables[0];

            }


            return ds;
        }

        public DataSet ExecuteStoredProcedureFillDataset(string stroredProcedureName, List<DatabaseParameter> dbParameterList)
        {

            DataSet dataSet = new DataSet();
            //using (var connection = (SqlConnection) this.Context.Database.GetDbConnection())
            //{
            var connection = (SqlConnection)this.Context.Database.GetDbConnection();
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

                da.Fill(dataSet);

                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }


            }


            return dataSet;
        }



        public IQueryable<TEntity> GetQuery()
        {

            return this.DbSet;
        }

        #endregion end test method


        public virtual IQueryable<IEnumerable<string>> ProjectionQuery(Expression<Func<TEntity, bool>> where,
                                    Expression<Func<TEntity, IEnumerable<string>>> selector)
        {

            IQueryable<TEntity> query = DbSet;

            return query.Where(where).Select(selector);
        }

        public virtual TEntity GetByID(object id)
        {

            return DbSet.Find(id);
        }


        public ICollection<TType> GetSelectedColumn<TType>(Expression<Func<TEntity, TType>> select) where TType : class
        {
            return DbSet.Select(select).ToList();
        }

        public ICollection<TType> GetSelectedColumnWithWhere<TType>(Expression<Func<TEntity, bool>> where,
            Expression<Func<TEntity, TType>> select) where TType : class
        {

            return DbSet.Where(where).Select(select).ToList();
        }

        public IQueryable<TType> GetSelectedColumnWithWhereQ<TType>(Expression<Func<TEntity, bool>> where,
            Expression<Func<TEntity, TType>> select) where TType : class
        {
            IQueryable<TEntity> query = DbSet;
            return query.Where(where).Select(select);
        }

        public virtual void Insert(TEntity entity)
        {
            DbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {
            TEntity entityToDelete = DbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (Context.Entry(entityToDelete).State == EntityState.Detached)
            {
                DbSet.Attach(entityToDelete);
            }
            DbSet.Remove(entityToDelete);
        }


        public virtual void Update(TEntity entityToUpdate)
        {
            DbSet.Attach(entityToUpdate);
            Context.Entry(entityToUpdate).State = EntityState.Modified;
        }


        public virtual IEnumerable<TEntity> GetMany(Func<TEntity, bool> where)
        {

            return DbSet.Where(where).ToList();
        }


        public virtual IQueryable<TEntity> GetManyQueryable(Func<TEntity, bool> where)
        {

            return DbSet.Where(where).AsQueryable();
        }




        public IQueryable<TEntity> GetQueryable(Func<TEntity, Boolean> where)
        {
            IQueryable<TEntity> query = DbSet;
            return query.Where(where).AsQueryable();

        }

        public TEntity Get(Func<TEntity, Boolean> where)
        {

            return DbSet.Where(where).FirstOrDefault<TEntity>();
        }




        public void Delete(Func<TEntity, Boolean> where)
        {
            IQueryable<TEntity> objects = DbSet.Where<TEntity>(where).AsQueryable();
            foreach (TEntity obj in objects)
                DbSet.Remove(obj);
        }


        public virtual IEnumerable<TEntity> GetAll()
        {

            return DbSet.ToList();
        }

        public virtual IEnumerable<TEntity> GetParentDetail(String childEntity)
        {

            return DbSet.Include(childEntity).ToList();
        }


        public IQueryable<TEntity> GetWithInclude(
            System.Linq.Expressions.Expression<Func<TEntity,
            bool>> predicate, params string[] include)
        {
            IQueryable<TEntity> query = this.DbSet;
            query = include.Aggregate(query, (current, inc) => current.Include(inc));
            return query.Where(predicate);
        }


        public bool Exists(object primaryKey)
        {
            return DbSet.Find(primaryKey) != null;
        }


        public TEntity GetSingle(Func<TEntity, bool> predicate)
        {

            return DbSet.Single<TEntity>(predicate);
        }


        public TEntity GetFirst(Func<TEntity, bool> predicate)
        {
            try
            {
                return DbSet.First<TEntity>(predicate);
            }
            catch (Exception ex)
            {
                var e = ex.Message;
            }

            return DbSet.First<TEntity>(predicate);
        }



        #region  Private mathod

        private SqlDbType RetunSqlDbType(DatabaseDataType type)
        {
            switch (type)
            {
                case 0:
                    return SqlDbType.Decimal;

            }

            return SqlDbType.VarChar;
        }

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
                    if (pro.Name.ToLower() == column.ColumnName.ToLower())
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

    }
}
