import { RESTDataSource } from "@apollo/datasource-rest";
// import postgres from "postgres";
// import {pguser, pgpass} from './pgcreds.js'

// const sqlcourses = new postgres({
//     host: '50.116.6.42',
//     port: 5432,
//     database: 'courses',
//     username: pguser,
//     password: pgpass
// })

class CoursesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'postgres://50.116.6.42/';
    }

    async getAllCourses() {
        return this.get(`courses/courses`)
    }

    
}




export {
    // sqlcourses,
    CoursesAPI
}