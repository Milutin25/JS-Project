const myComplexObject = {
    user: {
      name: "Jane Doe",
      contact: {
        email: "jane.doe@example.com",
        phone: "123-456-7890",
        socialMedia: {
          twitter: "@janedoe",
          linkedIn: "linkedin.com/in/janedoe"
        }
      },
      education: {
        university: "State University",
        degree: "BSc Computer Science",
        courses: [
          { code: "CS101", name: "Intro to Computer Science", assignments: [{ title: "Hello World", grade: "A" }, { title: "Data Structures", grade: "A" }] },
          { code: "CS102", name: "Advanced Programming", assignments: [{ title: "Web App", grade: "A" }, { title: "Android App", grade: "B+" }] }
        ]
      },
      workExperience: {
        companyName: "Tech Innovations Inc",
        role: "Software Developer",
        projects: [
          { name: "Project Alpha", technologies: ["JavaScript", "React"], contribution: "Frontend Development" },
          { name: "Project Beta", technologies: ["Node.js", "MongoDB"], contribution: "Backend Development" }
        ]
      }
    }
  }

  for ( key in myComplexObject){
    if ( typeof myComplexObject[key] != "object"){
        console.log(key, " : ", typeof key, " | ", false );
    } else{
        console.log(key, " : ", typeof key, " | ", true );

        for ( i in myComplexObject[key]){
            if ( typeof myComplexObject[key][i] != "object"){
                console.log(i, " : ", typeof myComplexObject[key][i], " | ", false );
            } else{
                console.log(i, " : ", typeof myComplexObject[key][i], " | ", true );
                
                for ( j in myComplexObject[key][i]){
                    if ( typeof myComplexObject[key][i][j] != "object"){
                        console.log(j, " : ", typeof myComplexObject[key][i][j], " | ", false );
                    } else{
                        console.log(j, " : ", typeof myComplexObject[key][i][j], " | ", true );

                        for ( x in myComplexObject[key][i][j]){
                            if ( typeof myComplexObject[key][i][j][x] != "object"){
                                console.log(x, " : ", typeof myComplexObject[key][i][j][x], " | ", false );
                            } else{
                                console.log(x, " : ", typeof myComplexObject[key][i][j][x], " | ", true );
                }
            }
        }
        }
    }
}
}
}