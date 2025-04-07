export { default as HomePage } from "./Home";
export { default as AboutPage } from "./About";

//HELP
export { default as ContactPage } from "./help/Contact";
export { default as FaqPage } from "./help/Faq";

//COURSE
export { default as CoursesPage } from "./course/Courses";
export { default as CourseDetailsPage } from "./course/CourseDetails";
export { default as CourseEditPage } from "./course/CourseEdit";
export { default as CourseCreatePage } from "./course/CourseCreate";

//ERROR
export { default as NotFoundPage } from "./error/NotFoundPage.jsx";
export { default as ErrorPage } from "./error/ErrorPage.jsx";

//ACTIONS
export { coursesLoader } from "./course/Courses";
export { courseDetailsLoader } from "./course/CourseDetails";
export { courseAction } from "./course/CourseForm";
