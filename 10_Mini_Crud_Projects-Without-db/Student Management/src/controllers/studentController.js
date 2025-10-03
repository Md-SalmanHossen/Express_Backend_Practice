
let students = [
   { id: 110345, name: "Rahim", age: 22, dept: "CSE", cgpa: 3.75 },
   { id: 110346, name: "Karim", age: 21, dept: "EEE", cgpa: 3.40 },
   { id: 110347, name: "Nishat", age: 23, dept: "BBA", cgpa: 3.90 },
   { id: 110348, name: "Tonmoy", age: 22, dept: "CSE", cgpa: 3.20 },
   { id: 110349, name: "Sadia", age: 20, dept: "CSE", cgpa: 3.95 }
];

let studentId = 110350; 

export const createStudent=(req,res)=>{
   try {

      const {name,age,dept,cgpa}=req.body;

      if(!name || !age || !dept || !cgpa){
         return res.status(400).json({
            message:"All field are required"
         })
      }

      const parsedAge=parseInt(age);
      const parsedCgpa=parseFloat(cgpa)

      if(isNaN(parsedAge) ||isNaN(parsedCgpa)){
         return res.status(400).json({
            message:"Age and CGPA must be number",
         })
      }
      if(parsedAge<15 || parsedAge>80){
         return res.status(200).json({
            message:"Age must be valid number between 15 to 80"
         })
      }
      if(parsedCgpa<0 || parsedCgpa>4.0){
         return res.status(200).json({
            message:"CGPA must be between 0 to 4.0"
         })
      }
      const newStudent={
         id:++studentId,
         name:name,
         dept:dept,
         age:age,
         cgpa:cgpa,
         createdAt: new Date().toISOString()
      }

      students.push(newStudent);

      return res.status(201).json({
         message:"Student create successfully",
         newStudent
      })

   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
} 

export const readAllStudent=(req,res)=>{
   try {
      return res.status(200).json({
         message:"Get student successfully",
         total_student:students.length,
         students
      });
   } catch (error) {
      return res.status(500).json({
         message:"server error",
         error:error.message
      })   
   }
}

export const readSingleStudent=(req,res)=>{
   try {

      const {id}=req.params;
      const studentFind=students.find((item)=>item.id===parseInt(id));

      if(!studentFind){
         return res.status(404).json({
            message:"Student not found"
         });
      }else{
         return res.status(200).json({
            message:"Fetched Student successfully",
            student:studentFind
         })
      }
   } catch (error) {
      return res.status(500).json({
         message: "Server error",
         error: error.message         
      })
   }
} 

export const updateStudent=(req,res)=>{
   try {

      const {id}=req.params;
      const parseId=parseInt(id);


      if(isNaN(parseId)){
         return res.status(400).json({
            message:"Invalid student Id"
         })
      }
      const index=students.findIndex((item)=>item.id===parseId);
      if(index===-1){
         return res.status(404).json({
            message:`Student with id ${parseId} not found`,
         });
      };

      const existingStudent=students[index];
      const {name,age,dept,cgpa}=req.body;

      if (!name || !age || !dept || !cgpa) {
         return res.status(400).json({
            message: "All fields are required for update"
         });
      };
      const intAge=parseInt(age);
      const floatCgpa=parseFloat(cgpa);

      if(isNaN(intAge ) ||isNaN([floatCgpa])){
         return res.status(400).json({
            message:"Age and cgpa must be number"
         })
      };

      const updateStudent={
         ...existingStudent,
         name:name,
         age:intAge,
         dept:dept,
         cgpa:floatCgpa,
         updatedAt: new Date().toISOString(),
      }
      students[index]=updateStudent;
      return res.status(200).json({
         message:"Student Information Update Successfully",
         student:updateStudent
      })
   } catch (error) {
      res.status(500).json({
         message:"server error",
         error:error.message
      })
   }
} 

export const updatePartially=(req,res)=>{
   try {

      const {id}=req.params;
      const parsedId=parseInt(id);

      if(isNaN(parsedId)){
         return res.status(400).json({
            message:"Invalid id"
         });
      };

      const studentIndex=students.findIndex((item)=>item.id===parsedId);
      if(studentIndex===-1){
         return res.status(404).json({
            message:`student with id ${id} not found`
         })
      }

      const existingStudent=students[studentIndex];
      const {name,age,dept,cgpa}=req.body;

      if(!name && !age && !dept && !cgpa){
         return res.json({
            message:"At least one field is required for partial update"
         });
      };

      const updateStudent={
         ...existingStudent,
         updatedAt:new Date().toISOString(),
      };
      if(name){
         updateStudent.name=name;
      }
      if(age){
         const intAge=parseInt(age);
         if(isNaN(intAge)){
            return res.status(400).json({
               message: "Age must be a number"
            });            
         }
         updateStudent.age=intAge;
      }
      if(dept){
         updateStudent.dept=dept;
      }
      if(cgpa){
         const floatCgpa=parseFloat(cgpa);
         if(isNaN(floatCgpa)){
            return res.status(400).json({
               message:"Cgpa must be a number"
            })
         }
         updateStudent.cgpa=floatCgpa;
      }

      students[studentIndex]=updateStudent;

      return res.status(200).json({
         message:"Student Partial Information Update Successfully",
         student:updateStudent
      });

   } catch (error) {
      
   }
} 

export const deleteSingleStudent=(req,res)=>{
   try {
      const {id}=req.params;
      const parseId=parseInt(id);

      if(isNaN(parseId)){
         return res.status(400).json({
            message:"Invalid student id"
         })
      }

      const index=students.findIndex((item)=>item.id===parseId);
      if(index===-1){
         return res.status(404).json({
            message:"Student not found",
            
         });
      }

      const deleteInfo=students.splice(index,1);
      return res.status(200).json({
         message:"Deleted student information successfully",
         deletedStudent:deleteInfo[0]
      })

   } catch (error) {
      res.status(500).json({
         message: "Server error",
         error: error.message
      });     
   }
} 

export const deleteAllStudent=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message: "Server error",
         error: error.message
      });     
   }
} 

export const searchStudent=(req,res)=>{
   try {
      //search by id,name and dept
   } catch (error) {
      res.status(500).json({
         message: "Server error",
         error: error.message
      });     
   }
} 
export const sortingStudent=(req,res)=>{
   try {
      
   } catch (error) {
      res.status(500).json({
         message: "Server error",
         error: error.message
      });     
   }
} 
