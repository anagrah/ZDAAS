using System;
using System.Collections.Generic;
namespace Zbizlink.MicroCRMDataImport.DataModel.Contracts
{
    public interface ICRMRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetByID(object id);
        void Update(TEntity entityToUpdate);
        void Insert(TEntity entity);
        void InsertRange(IEnumerable<TEntity> entity);
        void Delete(object id);       
    }
}
