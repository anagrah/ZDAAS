
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using Zbizlink.MicroCompany.DataModel.Database.DatabaseContext;
using Zbizlink.MicroCompany.DataModel.Enum;

namespace Zbizlink.MicroCompany.DataModel.Repositories
{
    public class GenericRepository<TEntity> where TEntity : class
    {

        internal CompanyManagementContext _context;
        internal DbSet<TEntity> DbSet;

        public GenericRepository(CompanyManagementContext context)
        {

            this._context = context;
            this.DbSet = context.Set<TEntity>();
        }

        #region Create Update Delete Methods
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
            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                DbSet.Attach(entityToDelete);
            }
            DbSet.Remove(entityToDelete);
        }


        public virtual void Update(TEntity entityToUpdate)
        {
            DbSet.Attach(entityToUpdate);
            _context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        public void Delete(Func<TEntity, Boolean> where)
        {
            IQueryable<TEntity> objects = DbSet.Where<TEntity>(where).AsQueryable();
            foreach (TEntity obj in objects)
                DbSet.Remove(obj);
        }

        #endregion

        #region  Read Methods
        public virtual List<TEntity> GetAll()
        {

            return DbSet.ToList();
        }

        public virtual List<TEntity> GetParentDetail(String childEntity)
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
