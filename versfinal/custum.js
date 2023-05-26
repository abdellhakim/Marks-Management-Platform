   
      document.getElementById("pdfcustum").addEventListener("submit",function(event){
        event.preventDefault();
        calculateGPA();
    });
    
    function calculateGPA() {
        
        var totalGradePoints = 0;
        var totalCredits = 0;
    
        for (var i = 1; i <= 6; i++) {
          var grade = parseFloat(document.getElementById("dbn"  ).value);
         
    
          totalGradePoints += grade ;
        
        }
    
        var gpa = totalGradePoints / 6;
    
        var gpaDisplay = document.getElementById("gpa-display");
        gpaDisplay.textContent = "Your average  is : " + gpa.toFixed(2);
    }
    
    
    window.onload = function () {
        document.getElementById("PDF")
            .addEventListener("click", () => {
                const pdfcustum = this.document.getElementById("pdfcustum");
                console.log(pdfcustum);
                console.log(window);
                var opt = {
                    padding : 1,
                    filename: 'myfile.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 3 },
                    jsPDF: { unit: 'in', format: 'legal', orientation: 'landscape' }
                };
                html2pdf().from(pdfcustum).set(opt).save();
            })
    }
    





