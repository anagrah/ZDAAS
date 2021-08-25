-- delete index [NonClusteredIndex-20190926-153154] on table  RFPCategoryData 
Declare @FK_ConstraintName varchar (50); 

set @FK_ConstraintName = (select i.name 
from sys.indexes i, sys.tables t
where i.object_id = t.object_id
  and i.type_desc = 'NONCLUSTERED'
  and t.name = 'RFPCategoryData'
  and i.name = 'NonClusteredIndex-20190926-153154')

  if @FK_ConstraintName is not null
  begin
	DROP INDEX [NonClusteredIndex-20190926-153154] ON RFPCategoryData

	set @FK_ConstraintName = null; 

	set @FK_ConstraintName = (select i.name 
	from sys.indexes i, sys.tables t
	where i.object_id = t.object_id
	and i.type_desc = 'NONCLUSTERED'
	and t.name = 'RFPCategoryData'
	and i.name = 'NonClusteredIndex-20190926-153154')

	if @FK_ConstraintName is null
	begin
		print '[NonClusteredIndex-20190926-153154] index is deleted';
	end
	else
		begin
			print '[NonClusteredIndex-20190926-153154] index is not deleted';
		end
	end
else 
begin
	print '[NonClusteredIndex-20190926-153154] index not found';
end
