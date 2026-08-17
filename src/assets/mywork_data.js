import smart_news_img from '../assets/smart_news.jpg'
import intellisurv_img from '../assets/intellisurv.jpg'
import facetrack_img from '../assets/facetrack.jpg'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Smart News App",
        w_desc: "Developed a cross-platform mobile app that fetches real-time news from multiple categories, featuring offline caching, dynamic image loading, and clickable article links with a clean responsive UI.",
        w_tech: "Flutter, Dart, REST APIs, Firebase",
        w_link: "https://github.com/adiyaak",
        w_img: smart_news_img
    },
    {
        w_no: 2,
        w_name: "Intelli-Surv: Smart CCTV Management",
        w_desc: "Built a smart CCTV surveillance system that efficiently stores video footage in XML format. Integrated real-time face detection to identify unknown individuals and send instant admin security alerts.",
        w_tech: "Python, OpenCV, XML, Computer Vision",
        w_link: "https://github.com/adiyaak/IntelliSurv-Smart-CCTV-Management-",
        w_img: intellisurv_img
    },
    {
        w_no: 3,
        w_name: "Face-Track | Real-Time Face Detection",
        w_desc: "Developed a real-time face detection system using Python, OpenCV, and MediaPipe to detect faces through a webcam feed, draw bounding circles, and display live people counts.",
        w_tech: "Python, OpenCV, MediaPipe",
        w_link: "https://github.com/adiyaak/FaceTrack",
        w_img: facetrack_img
    }
]

export default mywork_data;