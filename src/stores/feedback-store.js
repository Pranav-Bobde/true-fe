import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('feedback', {
  state: () => ({
    feedback: null,
    feed: null,
    ans: [],
    save:[]
  }),
  getters: {
    feedbackQues: (state) => {
      return (id) => {
        let ques = state.feedback.find((ques) => ques.id === id);
        let questionList = {
          id: ques.id,
          question: ques.question,
          // option: ques.options
        };
        state.feed = { ...questionList, id};
      }
    },
    feedbackAnswer: (state) => {
      return (id, val) => {
        let ansFound = state.ans.find((a) => Object.keys(a)[0] == id);
        if (ansFound) {
          state.ans.forEach((a) => {
            if (Object.keys(a)[0] == Object.keys(ansFound)[0]) {
              a[Object.keys(ansFound)[0]] = val;
            }
          });
        }
        else {
          let obj = {}
          obj[id] = val
          state.ans.push(obj)
        }
      }
    }


  },
  actions: {
    async fetchFeedback() {
      const response = await fetch(process.env.API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.KEY
        }
      });
      const data = await response.json();
      this.feedback = data;
      console.log("feedback: ", this.feedback);
      let length = this.feedback.length;
      for (let i = 0; i < length; i++) {
        this.feedback[i].name = i + 1;
      }
    },
    async postAnswer() {
      const response = await fetch(process.env.APIPOST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.KEY
        },
        // body: JSON.stringify({ a: 1, b: 'Textual content' })
        body: JSON.stringify(this.ans)
      });
      const data = await response.json();
      console.log(data);
    }

  },
});
