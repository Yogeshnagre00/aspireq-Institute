import{P as e,r as s,j as i,S as t}from"./vendor-D2mUJOhN.js";import{N as a,F as r}from"./header-1-B8IACU.js";import{O as n}from"./offer-lSOFutxB.js";import"./react-router-dom-B9vtBCrW.js";const l=({start:e})=>{const[a,r]=s.useState(!1),[n,l]=s.useState(window.innerWidth<=768);s.useEffect((()=>{e&&r(!0);const s=()=>{l(window.innerWidth<=768)};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)}),[e]);const c={infinite:!0,speed:500,slidesToShow:n?1:3,slidesToScroll:1,autoplay:a,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0",vertical:!n,verticalSwiping:!n,arrows:!0,dots:!1};return i.jsx("div",{className:"image-slider",children:i.jsx(t,{...c,children:["/Images/Devops engineer.webp","/Images/back-courses.webp","/Images/Container.webp","/Images/Full stack developer.webp","/Images/Business analyst.webp","/Images/Scrum master.webp","/Images/corporate.webp","/Images/Full stack developer.webp"].map(((e,s)=>i.jsx("div",{className:"slider-item",children:i.jsx("img",{src:e,alt:`Thumbnail ${s+1}`,loading:"lazy",onError:e=>{e.target.src="./Images/fallback-image.webp"}})},s)))},e?"autoplay-on":"autoplay-off")})};l.propTypes={start:e.bool.isRequired};const c={sliderItems:[{id:1,type:"video",src:"/Videos/demo.webm"},{id:2,type:"video",src:"/Videos/demo2.webm"}],courses:[{id:1,title:"Full Stack Developer",description:"Conquer the coding ground.",image:"./Images/Full stack developer.webp",bestseller:!0,discount:"50% Off",rating:"5.0"},{id:2,title:"Software Development Engineer in Testing (SDET)",description:"Be a software quality expert.",image:"./Images/SDET.webp",bestseller:!0,discount:"50% Off",rating:"5.0"},{id:3,title:"Devops Engineer",description:"Become Hero of Deployment.",image:"/Images/Devops engineer.webp",bestseller:!0,discount:"50% Off",rating:"5.0"},{id:4,title:"Business Analyst(BA)",description:"Master the Cognizance Virtuoso.",image:"./Images/Business analyst.webp",bestseller:!0,discount:"50% Off",rating:"5.0"},{id:5,title:"Scrum Master",description:"Master the Agile project management",image:"./Images/Scrum master.webp",bestseller:!0,discount:"50% Off",rating:"5.0"},{id:6,title:"Corporate Training",description:"Automate your testing process with the latest tools.",image:"./Images/corporate.webp",bestseller:!0,discount:"50% Off",rating:"5.0"}],steps:[{id:1,title:"Take course by industry experts",description:"Unlock Your Potential with Industry-Leading Training & Empower Your Future with ASPIREQ.",image:"./Images/Marriage counseling-cuate 1.webp"},{id:2,title:"Get a Course Certificate",description:"With our certification, you're not just learning new skills-you’re building a future of opportunities.",image:"./Images/Certification-cuate 1.webp"},{id:3,title:"Advance your career",description:"Your Future Starts Here! Start Your Dream Job with ASPIREQ",image:"./Images/Group 39881.webp"}]},o=()=>{var e,t,o,d,m,u;const{sliderItems:p,courses:h,steps:g}=c,[j,x]=s.useState(0),[v,N]=s.useState(!1),[b,w]=s.useState(!0),f=s.useRef(null);s.useEffect((()=>{var e;if("true"===sessionStorage.getItem("hasMainRun"))return void N(!0);let s;const i=f.current,t=()=>{x((e=>{const s=e+1;return s>=p.length?(N(!0),sessionStorage.setItem("hasMainRun","true"),e):s}))};return"video"===(null==(e=p[j])?void 0:e.type)&&i?(i.onended=t,i.play().catch((e=>console.log("Video play error:",e))),s=setTimeout(t,15e3)):s=setTimeout(t,5e3),()=>{clearTimeout(s),i&&(i.onended=null)}}),[j,p]);return i.jsxs(i.Fragment,{children:[i.jsx(a,{}),i.jsx("section",{className:"qa-section",children:i.jsxs("div",{className:"qa-section",children:[i.jsxs("div",{className:"main-card",children:["image"===(null==(e=p[j])?void 0:e.type)?i.jsx("img",{src:null==(t=p[j])?void 0:t.src,alt:null==(o=p[j])?void 0:o.title,className:"main-image"}):i.jsx("video",{ref:f,className:"main-video",src:null==(d=p[j])?void 0:d.src,controls:!0,autoPlay:!v,muted:b}),i.jsx("button",{className:"mute-button",onClick:()=>{w((e=>!e)),f.current&&(f.current.muted=!b)},children:b?"Unmute":"Mute"}),i.jsxs("div",{className:"content",children:[i.jsx("h3",{children:null==(m=p[j])?void 0:m.title}),i.jsx("p",{children:null==(u=p[j])?void 0:u.description})]}),i.jsx("div",{className:"slider-dots",children:p.map(((e,s)=>i.jsx("span",{className:"dot "+(j===s?"active":""),onClick:()=>x(s)},s)))})]}),i.jsx("div",{className:"thumbnail-stack",children:i.jsx(l,{start:v})})]})}),i.jsxs("section",{id:"course-section",className:"course-section",children:[i.jsx("h2",{children:"Courses"}),i.jsx("div",{className:"course-section__grid",children:h.map(((e,s)=>i.jsxs("div",{className:"course-card",onClick:()=>window.open(`/course-details/${e.id}`,"_blank"),style:{cursor:"pointer"},children:[i.jsxs("div",{className:"course-image",children:[i.jsx("img",{src:e.image,alt:e.title,loading:"lazy"}),e.bestseller&&e.discount&&i.jsxs("div",{className:"custom-label",children:[i.jsx("span",{className:"label-bestseller",children:"Bestseller"}),i.jsx("span",{className:"label-discount",children:e.discount})]})]}),i.jsxs("div",{className:"course-content",children:[i.jsx("h3",{children:e.title}),i.jsx("p",{children:e.description}),i.jsxs("div",{className:"course-rating",children:[i.jsxs("span",{className:"rating",children:["⭐ ",e.rating]}),i.jsx("button",{className:"course-card__button",children:"→"})]})]})]},s)))})]}),i.jsx("section",{className:"how-it-work",children:i.jsxs("div",{className:"how-it-works",children:[i.jsx("h2",{children:"How it works"}),i.jsxs("div",{className:"horizontal-stepper",children:[i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"circle",children:"1"}),i.jsx("div",{className:"line"})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"circle",children:"2"}),i.jsx("div",{className:"line"})]}),i.jsx("div",{className:"step",children:i.jsx("div",{className:"circle",children:"3"})})]}),i.jsx("div",{className:"steps-container",children:g.map((e=>i.jsxs("div",{className:"step-card",children:[i.jsx("img",{src:e.image,alt:e.title,className:"step-image"}),i.jsxs("div",{className:"description",children:[i.jsx("h3",{children:e.title}),i.jsx("p",{children:e.description})]})]},e.id)))})]})}),i.jsxs("section",{className:"certificate-section",children:[i.jsx("h2",{children:"Certificate"}),i.jsxs("div",{className:"certificate-container",children:[i.jsx("div",{className:"certificates-image",children:i.jsx("img",{src:"/Images/Full-Stack-Development-course-certificate.png",alt:"Sample Certificate"})}),i.jsxs("div",{className:"certificate-details",children:[i.jsx("h3",{children:"Industry-Recognized Certificate"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Skill Enhancement"}),i.jsx("li",{children:"Improved Communication and Collaboration Skills"}),i.jsx("li",{children:"Confidence Boost"}),i.jsx("li",{children:"Accreditation and Recognition"}),i.jsx("li",{children:"Professional Recognition"}),i.jsx("li",{children:"Entrepreneurial Opportunities"}),i.jsx("li",{children:"Access to Better Pay"})]})]})]})]}),i.jsx("section",{className:"DemoClass-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Join your class with your instructor"}),i.jsx("div",{className:"live-class-image",children:i.jsx("img",{src:"/Images/classRoom.jpg",alt:"Live Class Example"})}),i.jsxs("div",{className:"class-container",children:[i.jsx("div",{className:"button",children:"Full Stack Developer"}),i.jsx("div",{className:"button",children:"Software Testing"}),i.jsx("div",{className:"button",children:"DevOps"}),i.jsx("div",{className:"button",children:"Business Analyst"}),i.jsx("div",{className:"button",children:"Scrum Master"})]})]})}),i.jsx(n,{}),i.jsx(r,{})]})};export{o as default};
