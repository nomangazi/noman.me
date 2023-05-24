import ipAddress from "../assets/image/ip-website.jpg"
import blogApp from "../assets/image/blog-website.jpg"
import weatherApp from "../assets/image/weather-website.jpg"
import cudaPreview from "../assets/image/cuda-website.jpg"

export const portfolios = {
  Web: [
    {
      type: "featured",
      name: "Blog",
      image: blogApp,
      description: "My personal blog where I write about my experience and knowledge",
      demo: "https://blog.noman.me",
      tools: ["HashNode"],
    },
    {
      type: "featured",
      name: "Weather",
      image: weatherApp,
      description: "A simple weather app using OpenWeatherMap API",
      demo: "https://weather.noman.me",
      source: "https://github.com/nomangazicse/bd-weather",
      tools: ["HTML5","CSS3", "JavaScript"],
    },
    {
      type: "featured",
      name: "Cuda Portfolio",
      image: cudaPreview,
      description: "A simple portfolio website using HTML5, CSS3, JavaScript, jQuery, Bootstrap",
      demo: "https://cuda.noman.me",
      source: "https://github.com/nomangazicse/cudaportfolio",
      tools: ["HTML5","CSS3", "JavaScript", "jQuery", "Bootstrap"],
    }
  ],
  Others: [
    {
      type: "featured",
      name: "IP-Address",
      image: ipAddress,
      description: "A simple IP Address show",
      demo: "https://ip.noman.me",
      source: "https://github.com/nomangazicse/ip-address",
      tools: ["HTML5","CSS3", "PHP7"],
    }
  ]
}
