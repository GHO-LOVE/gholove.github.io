const myQuestions = [
  {
    title: "Question 1 - GHO name",
    question: "What is the full name of GHO?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Green fields on the roofs.",
      b: "The Green House Roof Solution.",
      c: "Green roofs of buildings."
    },
    correctAnswer: "b",
    correctAnswerText: "That is correct.<p>The Green House Roof Solution, registered.</p>",
    falseAnswerText: "That's not correct.<p>GHO full names, as described in all of its documents!</p>"
  },
  {
    title: "Question 2 - Formal",
    question: "When was GHO formally registered?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide2.jpg'>",
    answers: {
      a: "May 2019",
      b: "May 2021",
      c: "May 2022"
    },
    correctAnswer: "c",
    correctAnswerText: "That is correct.<p>GHO ("Kết cấu Mái nhà xanh" - The Green House Roof Solution) was registered on May 26, 2022 as an intellectual property.</p>",
    falseAnswerText: "That is wrong.<p>May 2022!</p>"
  },
  {
    title: "Question 3 - Positive effects",
    question: "What are the main effects-to-be from GHO?</p><p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide3.jpg'>",
    answers: {
      a: "No more CO2, zero hungerers, and not against the nature.",
      b: "No more CO2, not against the nature..",
      c: "Zero hungerers."
    },
    correctAnswer: "a",
    correctAnswerText: "That is correct.<p>The main effects-to-be from GHO are positive effects, in its strategy principles: No more CO2, zero hungerers, and not against the nature.</p>",
    falseAnswerText: "That´s wrong!<p>The main effects-to-be from GHO: No more CO2, zero hungerers, and not against the nature.</p>"
  },
  {
    title: "Question 4 - Letter counting",
    question: "Which word or phrase below has more than three letters 'i'?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide4.gif'>",
    answers: {
      a: "A multi-interesting paper.",
      b: "An initiative (or a multi-interesting idea).",
      c: "An interesting idea."
    },
    correctAnswer: "b",
    correctAnswerText: "That is correct.<p>An initiative has four letters 'i'. The point on this letter is round and becomes letter 'o' when we write in lowercase status.</p>",
    falseAnswerText: "That is not correct.<p>An initiative (multi-interesting ideas). Or this word may have same meaning with diverse.</p>"
  },
  {
    title: "Question 5 - CO2 formation",
    question: "How is CO2 generated?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "From the emissions of heat from the sun.",
      b: "From the burning of fossil fuels combined with oxygen in the air.",
      c: "From the rising up of the sea level."
    },
    correctAnswer: "b",
    correctAnswerText: "That is correct.<p>Yes. Scientists explain that CO2 is formed from the burning of fossil fuels combined with oxygen in the air.</p>",
    falseAnswerText: "That is not correct.<p>CO2 is formed from the burning of fossil fuels, combined with oxygen in the air. How to have more oxygen and less carbon dioxide?</p>"
  },
  {
    title: "Question 6 - The missing soil",
    question: "How much area of which has been missing after the completed construction of buildings around the world?
(An estimation of 80% of the Earth's surface that humans have modified)?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "18.1 million km2.",
      b: "16.1 million km2.",
      c: "14.5 million km2."
    },
    correctAnswer: "c",
    correctAnswerText: "That is correct.<p>Yes. Scientists explain An estimation of 80% of the Earth's surface that humans have modified for CO2-emissed roofs of buildings.</p>",
    falseAnswerText: "That is not correct.<p>CO2-emissed roofs, combined with the heat rising up level, has threatened our world for years. At the same time, the missing soil on the Earth's surface (like implanted skin) has made our Mother Earth to cry for so many years, nights and days. Don't you think so?</p>"
  },
  {
    title: "Question 7 - GHO into action",
    question: "Why do we need to turn GHO into action?
(Because one of its purpose is to make peace with the Nature).<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "An initial estimation of about ten (10) million billions U.S.Dollars in less than a year time.",
      b: "An initial estimation of about less than one million billions U.S.Dollars in less than a year time.",
      c: "An initial estimation of about two million billions U.S.Dollars in less than a year time."
    },
    correctAnswer: "c",
    correctAnswerText: "That is correct.<p>Yes.  14.5 million km2 is about 80% of 18.1 million km2 of the Earth's surface that humans have modified for buildings, where green fields have gone.</p>",
    falseAnswerText: "That is not correct.<p> Scientists reported that 18.1 million km2 of Earth's surface has been modified by humans. And 14.5 million km2 is about 80% of that number which is greater than Russia's area (17.1 million km2).</p>"
  },
  {
    title: "Question 8 - Thoughtful responsibility",
    question: "A million billions U.S.Dollars initiative means:<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "Building more houses.",
      b: "Returning the missing soil to the roofs of buildings.",
      c: "Returning soil to grow trees."
    },
    correctAnswer: "b",
    correctAnswerText: "That is correct.<p>Yes. The missing soil on the Earth's surface has reduced the use of land for crops, and gone against the nature.</p>",
    falseAnswerText: "That is not correct.<p>Anyone can grow trees beneath the buildings? No. So, is it a responsibility to return the missing soil to the roofs of buildings?</p>"
  },
  {
    title: "Question 9 - Cryptocurrency along with GHO",
    question: "Which cryptocurrency is used in GHO action programmes??<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "BTC.",
      b: "EMS.",
      c: "ETH."
    },
    correctAnswer: "b",
    correctAnswerText: "EMS cryptocurrency was created in 2020 and has been verified to be along with GHO Action Programmes.</p>",
    falseAnswerText: "That is not correct.<p>The correct answer is EMS. Its latest update of the EMS White Paper was on September 18, 2022, and is availavle at https://t.me/emsaction.</p>"
  },
  {
    title: "Question 10 - Latest update",
    question: "When was the latest update for EMS White Paper?<p>Select your answer then Confirm.</p>",
    background: "<img src='./img/bg_slide5.jpg'>",
    answers: {
      a: "May 2020.",
      b: "April 2021.",
      c: "May 2022."
    },
    correctAnswer: "c",
    correctAnswerText: "That is correct.<p>It was updated with two more points on September 18, 2022, incorporating into its first version on April 23, 2021.</p>",
    falseAnswerText: "That is not correct.<p>The correct answer is c. EMS was first appeared on blockchain in 2020, with a purpose for green fields on the roofs</p>"
  }
];
