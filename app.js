Vue.component("todo-item", {
  template: '<li class="list-group-item" >This is a task</li>',
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      name: "",
      course: "",
      term: "",
      defaultLastID: 3,
      students: [
        {
          id: 1,
          name: "Mary",
          course: "Desktop Application Dev",
          term: "Sep 2020",
        },
        { id: 2, name: "Lynn", course: "Machine Learning", term: "Sep 2020" },
        {
          id: 3,
          name: "Charlie",
          course: "Machine Learning",
          term: "Sep 2020",
        },
      ],
    };
  },
  methods: {
    addStudent() {
      this.defaultLastID++;
      student = {
        id: this.defaultLastID,
        name: this.name,
        course: this.course,
        term: this.term,
      };
      this.students.push(student);
    },
  },
});
