exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("notes")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("notes").insert([
          { title: "What up?", textBody: "This is a text body" },
          { title: "Build an API", textBody: "Another test for text body" },