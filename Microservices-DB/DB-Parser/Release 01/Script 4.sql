/* Constraint will be dropped following tables (Opportunity, RFPCategoryData, RFPSummary )*/

Declare @FK_ConstraintName varchar (50); 
Declare @referenceTableName varchar(50);

Declare FK_ConstraintCursor CURSOR FOR 
SELECT CONSTRAINT_NAME,
   TABLE_NAME
   FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	 WHERE CONSTRAINT_NAME in
(select distinct name from sys.objects where object_id in 
(   select fk.constraint_object_id from sys.foreign_key_columns as fk
    where fk.referenced_object_id = 
        (select object_id from sys.tables where name = 'RFPDocument')
))

Open FK_ConstraintCursor

Fetch Next from FK_ConstraintCursor into @FK_ConstraintName, @referenceTableName

While(@@FETCH_STATUS = 0)
Begin

if @referenceTableName = 'Opportunity'
    EXEC('ALTER TABLE ' + @referenceTableName + ' DROP CONSTRAINT ' + @FK_ConstraintName)

if @referenceTableName = 'RFPCategoryData'
    EXEC('ALTER TABLE ' + @referenceTableName + ' DROP CONSTRAINT ' + @FK_ConstraintName)

if @referenceTableName = 'RFPSummary'
    EXEC('ALTER TABLE ' + @referenceTableName + ' DROP CONSTRAINT ' + @FK_ConstraintName)

Fetch Next from FK_ConstraintCursor into @FK_ConstraintName, @referenceTableName;
end

CLOSE FK_ConstraintCursor 

DEALLOCATE FK_ConstraintCursor

