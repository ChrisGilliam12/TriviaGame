$( document ).ready(function(){

    answersCorrect = 0;
    answersWrong = 0;
    answer1 = 0;
    


        $('#submit'). on('click', function (){
            answer1 = $("input[name = 'question1']:checked").val();
            
            if(answer1 == 2){
                answersCorrect++
            
            } else {
                answersWrong ++
                
            }
            answer2 = $("input[name = 'question2']:checked").val();
            
            if(answer2 == 4){
                answersCorrect++
          
            } else {
                answersWrong ++
                
            }
            answer3 = $("input[name = 'question3']:checked").val();
            
            if(answer3 == 1){
                answersCorrect++
          
            } else {
                answersWrong ++
                
            }
            clearTimeout(time);
            alert("answers correct:" + answersCorrect + "answers wrong:" + answersWrong)
            location.reload()
        
            
    })
    time = setTimeout(function(){

        answer1 = $("input[name = 'question1']:checked").val();
            
            if(answer1 == 2){
                answersCorrect++
            
            } else {
                answersWrong ++
                
            }
            answer2 = $("input[name = 'question2']:checked").val();
            
            if(answer2 == 4){
                answersCorrect++
          
            } else {
                answersWrong ++
               
            }
            answer3 = $("input[name = 'question3']:checked").val();
            
            if(answer3 == 1){
                answersCorrect++
            
            } else {
                answersWrong ++
                
            }
        
        alert("Time's up!")
        alert(" Answers correct: " + answersCorrect +  " Answers wrong: " + answersWrong)
        location.reload()
        
    }, 60000)
})
