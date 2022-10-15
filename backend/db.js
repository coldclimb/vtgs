import { SQLDataSource } from "datasource-sql";

class CoursesAPI extends SQLDataSource {
  async getAllCourses() {
    return await this.knex.select("*").from("courses/courses");
  }

  async getCourseByName(name) {
    return await this.knex
      .select("*")
      .from("courses")
      .where({ name: name })
      .first();
  }
}

export {
  CoursesAPI,
};
