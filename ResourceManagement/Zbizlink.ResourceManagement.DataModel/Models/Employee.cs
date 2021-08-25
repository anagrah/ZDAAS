using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zbizlink.ResourceManagement.DataModel.Models
{
    public partial class Employee
    {
        public Employee()
        {

        }

        [DisplayName("First Name")]
        public string FirstName { get; set; }
        [DisplayName("Middle Name")]
        public string MiddleInitial { get; set; }
        [DisplayName("Last Name")]
        public string LastName { get; set; }
        [DisplayName("Summary")]
        public string Summary { get; set; }
        [DisplayName("Email")]
        [Required(ErrorMessage = "Email required")]
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = "Please enter valid e-mail address")]
        public string Email { get; set; }
        [DisplayName("Annual Salary")]
        public Nullable<decimal> AnnualSalary { get; set; }
        [DisplayName("Hourly Rate")]
        public Nullable<decimal> HourlyRate { get; set; }
        [DisplayName("Employee Certifications")]
        public virtual ICollection<EmployeeCertification> EmployeeCertifications { get; set; }
        [DisplayName("Employee Educations")]
        public virtual ICollection<EmployeeEducation> EmployeeEducations { get; set; }
        [DisplayName("Employee Experiences")]
        public virtual ICollection<EmployeeExperience> EmployeeExperiences { get; set; }
        [DisplayName("Employee Projects")]
        public virtual ICollection<EmployeeProject> EmployeeProjects { get; set; }
        [DisplayName("Employee Skills")]
        public virtual ICollection<EmployeeSkill> EmployeeSkills { get; set; }
        [DisplayName("Employee References")]
        public virtual ICollection<EmployeeReference> EmployeeReferences { get; set; }
        [DisplayName("Employee Histories")]
        public virtual ICollection<EmployeeHistory> EmployeeHistories { get; set; }
        [DisplayName("Employee Locations")]
        public virtual ICollection<EmployeeLocation> EmployeeLocations { get; set; }
        [DisplayName("BirthDate")]
        public Nullable<System.DateTime> BirthDate { get; set; }
        public decimal EmployeeID { get; set; }
        [DisplayName("Photo Path")]
        public string PhotoPath { get; set; }
        public Nullable<decimal> DesignationID { get; set; }
        public Nullable<decimal> CompanyDepartmentID { get; set; }
        public Nullable<decimal> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<decimal> ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public int IsActiveID { get; set; }
        public Nullable<bool> IsCandidate { get; set; }
        [DisplayName("Emergency Contact Name")]
        public string EmergencyContactName { get; set; }
        [DisplayName("Emergency Contact Number")]
        public string EmergencyContactNumber { get; set; }
        public string EmergencyAlternateNumber { get; set; }
        [NotMapped]
        public int TotalRank { get; set; }
    }
}
