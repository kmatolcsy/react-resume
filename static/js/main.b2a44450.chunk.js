(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/profile.8b359715.jpeg"},15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),s=a.n(r),o=a(1),l=a(2),c=a(4),d=a(3),m=a(7),u=a(5),h=a(17),p=a(18);var f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.blob,t=e.id,a=e.section;return i.a.createElement("div",{className:"box ".concat(a),id:t,style:this.props.style})}}]),t}(i.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=this.props,a=t.sections,n=t.colRatio,r=void 0===n?2/12:n,s=t.timelineOffset,o=void 0===s?30:s,l=function(e){var t=[],a=(new Date).getFullYear(),n=0;for(var i in e){var r=!0,s=!1,o=void 0;try{for(var l,c=e[i][Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var d=l.value;(d.from||d.to)<a&&(a=d.from||d.to),(d.to||d.from)>n&&(n=d.to||d.from);var m=Object(p.a)({},d);m.section=i,t.push(m)}}catch(y){s=!0,o=y}finally{try{r||null==c.return||c.return()}finally{if(s)throw o}}}for(var u=n-a,h=0,f=t;h<f.length;h++){var v=f[h];v.to=v.to||n,v.from=v.from||v.to,v.yRatio=100*(v.from-a)/u,v.lengthRatio=100*(v.to-v.from)/u,v.widthRatio=4*Math.log(u/(v.to-v.from))}return t}(a),c=window.innerHeight-2*o,d=window.innerWidth*r/2,m=!0,u=!1,v=void 0;try{for(var y,b=l.entries()[Symbol.iterator]();!(m=(y=b.next()).done);m=!0){var E=y.value,g=Object(h.a)(E,2),j=g[0],O=g[1],w={position:"fixed",left:"".concat(d-O.widthRatio/100*c,"px"),bottom:"".concat(O.yRatio/100*c+o,"px"),height:"".concat(O.lengthRatio/100*c,"px"),width:"".concat(O.widthRatio/100*c,"px"),opacity:O.id==this.props.activeId?"0.8":"0.2"};O.lengthRatio||(w.bottom="".concat(parseFloat(w.bottom.slice(0,-2))-c/50,"px"),w.left="".concat(d-c/50,"px"),w.height="".concat(c/25,"px"),w.width="".concat(c/25,"px"),w.borderRadius="50%"),e.push(i.a.createElement(f,{key:j,style:w,blob:O}))}}catch(k){u=!0,v=k}finally{try{m||null==b.return||b.return()}finally{if(u)throw v}}return i.a.createElement("div",{className:"timeline"},e)}}]),t}(i.a.Component),y=a(13),b=a.n(y),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid section"},i.a.createElement("div",{className:"row align-items-end header"},i.a.createElement("div",{className:"col col-lg-4"},i.a.createElement("img",{src:b.a,alt:"profile",style:{height:"20rem"}})),i.a.createElement("div",{className:"col col-lg-8 header-content"},i.a.createElement("p",{style:{fontSize:"20px"}},"Hello, my name is"),i.a.createElement("h1",{stlye:{textAlign:"center"}},"KRISTOF MATOLCSY"),i.a.createElement("p",{style:{textAlign:"justify",fontSize:"1rem"}},"I was born and raised in Hungary, where I did a bachelor in mathematics and a master\u2019s in actuarial and financial mathematics. I am keen on learning new things, I recently took up a study in computer and data science. I used to ski as a semi-professional and was really enjoying it until the combination of an academic study and top sport became too demanding. In Amsterdam, I switched from snow to water: swimming is my biggest passion now."),i.a.createElement("a",{href:"https://github.com/kmatolcsy/resume/archive/master.zip",role:"button",class:"btn btn-dark btn-lg"},"Download my resume"),i.a.createElement("a",{className:"btn btn-link btn-lg"}," or read further"))))}}]),t}(i.a.Component),g=a(6),j=a.n(g),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleMouseEnter=function(e){return a.props.handleEnter(e.currentTarget.id)},a.handleMouseLeave=function(){return a.props.handleLeave()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content,t=e.bullets,a=e.summary,n=e.id;return t=t.map(function(e,t){return i.a.createElement("li",{key:t},e)}),a=a?i.a.createElement("span",null,a):null,i.a.createElement("div",{className:"row align-items-end entry",id:n,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},i.a.createElement("div",{className:"col col-md-9"},i.a.createElement("h3",{className:"entry-title"},this.props.content.title),i.a.createElement("h5",{className:"entry-subtitle"},this.props.content.subtitle)),i.a.createElement("div",{className:"col col-md-3"},i.a.createElement("h6",{className:"entry-period"},this.props.content.from," - ",this.props.content.to),i.a.createElement("h6",{className:"entry-place"}," ",i.a.createElement(j.a,{name:"map-marker"})," ",this.props.content.at)),i.a.createElement("div",{className:"col col-md-10"},i.a.createElement("p",{style:{textAlign:"justify"}},a),i.a.createElement("ul",null,t)))}}]),t}(i.a.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleEnter=function(e){return a.props.handleEnter(e)},a.handleLeave=function(){return a.props.handleLeave()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.entries.map(function(t){return i.a.createElement(O,{key:t.id,content:t,handleEnter:e.handleEnter,handleLeave:e.handleLeave})});return i.a.createElement("div",{className:"container-fluid section",id:this.props.title.toLowerCase()},i.a.createElement("h2",{className:"section-title"},i.a.createElement("span",{style:{borderBottom:"3px solid #000",paddingBottom:"3px"}},this.props.title.slice(0,2)),this.props.title.slice(2)),i.a.createElement("div",{className:"section-entries"},t))}}]),t}(i.a.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleMouseEnter=function(e){return a.props.handleEnter(e.currentTarget.id)},a.handleMouseLeave=function(){return a.props.handleLeave()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content,t=e.summary,a=e.subtitle,n=e.id;return t=t?i.a.createElement("span",null,t):null,a=a?i.a.createElement("span",{style:{fontSize:"1rem",fontWeight:"normal"}},", ",a):null,i.a.createElement("div",{className:"row align-items-end entry",id:n,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},i.a.createElement("div",{className:"col col-md-11"},i.a.createElement("h5",{style:{fontWeight:"bold"}},this.props.content.title,a)),i.a.createElement("div",{className:"col col-md-1"},i.a.createElement("h6",{className:"entry-period"},this.props.content.to)),i.a.createElement("div",{className:"col col-md-10"},i.a.createElement("p",{style:{textAlign:"justify"}},t)))}}]),t}(i.a.Component),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleEnter=function(e){return a.props.handleEnter(e)},a.handleLeave=function(){return a.props.handleLeave()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.entries.map(function(t,a){return i.a.createElement(k,{key:a,content:t,handleEnter:e.handleEnter,handleLeave:e.handleLeave})});return i.a.createElement("div",{className:"container-fluid section",id:this.props.title.toLowerCase()},i.a.createElement("h2",{className:"section-title"},i.a.createElement("span",{style:{borderBottom:"3px solid #000",paddingBottom:"3px"}},this.props.title.slice(0,2)),this.props.title.slice(2)),i.a.createElement("div",{className:"section-entries"},t))}}]),t}(i.a.Component),N=a(14),x=a.n(N),A=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"row align-items-end entry"},i.a.createElement("div",{className:"col col-md-12"},i.a.createElement("h3",{style:{marginBottom:"1rem"}},this.props.content.title),i.a.createElement(x.a,{skills:this.props.content.bullets})))}}]),t}(i.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.entries.map(function(e){return i.a.createElement(A,{key:e.id,content:e})});return i.a.createElement("div",{className:"container-fluid section",id:this.props.title.toLowerCase()},i.a.createElement("h2",{className:"section-title"},i.a.createElement("span",{style:{borderBottom:"3px solid #000",paddingBottom:"3px"}},this.props.title.slice(0,2)),this.props.title.slice(2)),i.a.createElement("div",{className:"section-entries"},e))}}]),t}(i.a.Component),C=a(15),M=a.n(C),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleEnter=function(e){var t={};t[e.currentTarget.id]=!0,a.setState(t)},a.handleLeave=function(e){var t={};t[e.currentTarget.id]=!1,a.setState(t)},a.state={location:!1,linkedin:!1,email:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",{style:{listStyle:"none"}},i.a.createElement("li",{id:"location",onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave},i.a.createElement(j.a,{spin:this.state.location,fixedWidth:!0,name:"map-pin",size:"2x"}),i.a.createElement("a",{style:{fontSize:"1.5rem"},href:"https://www.google.com/maps/place/Amsterdam/@52.3545653,4.7585408,11z/data=!3m1!4b1!4m5!3m4!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3679843!4d4.9035614"}," Amsterdam, NL")),i.a.createElement("li",{id:"email",onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave},i.a.createElement(j.a,{spin:this.state.email,fixedWidth:!0,name:"envelope",size:"2x"}),i.a.createElement("a",{style:{fontSize:"1.5rem"},href:"mailto:kmtlcsy@gmail.com"}," kmtlcsy@gmail.com")),i.a.createElement("li",{id:"linkedin",onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave},i.a.createElement(j.a,{spin:this.state.linkedin,fixedWidth:!0,name:"linkedin",size:"2x"}),i.a.createElement("a",{style:{fontSize:"1.5rem"},href:"https://www.linkedin.com/in/kmtlcsy/"}," \\kmtlcsy")))}}]),t}(i.a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid section"},i.a.createElement("div",{className:"row footer"},i.a.createElement("div",{className:"col col-lg-6 footer-content footer-left"},i.a.createElement("h3",{className:"footer-title"},"Powered by"),i.a.createElement("img",{src:M.a,className:"App-logo",alt:"logo"})),i.a.createElement("div",{className:"col col-lg-6 footer-content"},i.a.createElement("h3",{className:"footer-title"},"Find me"),i.a.createElement(I,null))))}}]),t}(i.a.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleEnter=function(e){return a.props.handleEnter(e)},a.handleLeave=function(){return a.props.handleLeave()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sections,t=e.experience,a=e.education,n=e.certifications,r=e.awards,s=e.extracurricular,o=e.skills;return i.a.createElement("div",{className:"resume"},i.a.createElement(E,null),i.a.createElement(w,{title:"EXPERIENCE",entries:t,handleEnter:this.handleEnter,handleLeave:this.handleLeave}),i.a.createElement(w,{title:"EDUCATION",entries:a,handleEnter:this.handleEnter,handleLeave:this.handleLeave}),i.a.createElement(w,{title:"EXTRACURRICULAR",entries:s,handleEnter:this.handleEnter,handleLeave:this.handleLeave}),i.a.createElement(L,{title:"CERTIFICATIONS",entries:n,handleEnter:this.handleEnter,handleLeave:this.handleLeave}),i.a.createElement(L,{title:"AWARDS",entries:r,handleEnter:this.handleEnter,handleLeave:this.handleLeave}),i.a.createElement(S,{title:"SKILLS",entries:o}),i.a.createElement(R,null))}}]),t}(i.a.Component),B=a(16),D=a.n(B),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.props.sections)e.push(i.a.createElement("li",{key:t},i.a.createElement("a",{href:"#".concat(t)},t)));return i.a.createElement("div",{className:"sidebar"},i.a.createElement(D.a,{items:Object.keys(this.props.sections),currentClassName:"current-section",style:{listStyle:"none"}},e))}}]),t}(i.a.Component),F=a(8),U=(a(44),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={activeId:null},a.handleEnter=a.handleEnter.bind(Object(m.a)(a)),a.handleLeave=a.handleLeave.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleEnter",value:function(e){this.setState({activeId:e})}},{key:"handleLeave",value:function(){this.setState({activeId:null})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col-md-2"},i.a.createElement(v,{sections:F,activeId:this.state.activeId})),i.a.createElement("div",{className:"col col-md-8"},i.a.createElement(T,{sections:F,handleEnter:this.handleEnter,handleLeave:this.handleLeave})),i.a.createElement("div",{className:"col col-md-2"},i.a.createElement(P,{sections:F}))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={experience:[{id:1,title:"Quantitative Risk Analyst",subtitle:"ING Bank, Model Risk Management",from:2017,to:2019,at:"Amsterdam",summary:"Responsible for carrying out project-based independent assessment of market risk and  counterparty credit risk models in line with the relevant regulatory standards, notably:",bullets:["Assess the model's conceptual soundness and identify areas for improvement","Challenge the model assumptions, mathematical formulation, and implementation","Manage interaction with stakeholders (model developers, business owners and audit)","Contribute to the team's governing policy, Python code base and automation efforts"]},{id:2,title:"Customer Insight Analyst Intern",subtitle:"CIB Bank, Customer Relationship Management",from:2014,to:2015,at:"Budapest",summary:"Applying statistical tools on customer, transactional and behavioural data to:",bullets:["Provide recommendations and customer segmentation for marketing campaigns","Analyse results of marketing campaigns and other sales activities","Support business decisions and identify business opportunities"]}],education:[{id:3,title:"Exchange Student, Econometrics",subtitle:"Unversity of Groningen",from:2017,to:2017,at:"Groningen",summary:"Challenged myself in studying courses in Asset Pricing, Econometrics, Game Theory and Business Ethics from a different perspective and in different format than in my home university. Improved team working skills by regularly working in groups with local and other exchange students on academic assignments, gave presentations to international student audience.",bullets:[]},{id:4,title:"MSc, Actuarial and Financial Mathematics",subtitle:"Corvinus Unversity of Budapest & E\xf6tv\xf6s L\xf3r\xe1nd University",from:2015,to:2018,at:"Budapest",bullets:["Major in Quantitative Finance","Awarded with the Advanced Scholarship of the Hungarian National Bank","Teaching Assistant at the Department of Finance for two terms and at the Department of Probability and Statistics for one term","Took additional courses in Asset Pricing, Econometrics and Game Theory at University of Groningen as part of an exchange program"]},{id:5,title:"BSc, Mathematics",subtitle:"University of Debrecen",from:2011,to:2014,at:"Debrecen",bullets:["Major in Applied and Business Mathematics","Awarded with the Advanced Scholarship of the Faculty of Science and Technology","Teaching Assistant at the Department of Analysis for two terms"]}],extracurricular:[{id:6,title:"Teaching Assisstant",subtitle:"E\xf6tv\xf6s L\xf3r\xe1nd University, Department of Probability and Statistics",from:2016,to:2017,at:"Budapest",bullets:["Prepared for and led weekly Probability Theory and Statistics seminar for 26 students, prepared and graded exams throughout the seminar, and assisted the department in the administration."]},{id:7,title:"Teaching Assisstant",subtitle:"Corvinus University of Budapest, Department of Finance",from:2016,to:2017,at:"Budapest",bullets:["Co-led weekly exam preparation workshops for 30+ students in Investments.","Assisted the department in the grading of assignments."]},{id:8,title:"Teaching Assisstant",subtitle:"University of Debrecen, Department of Analysis",from:2013,to:2014,at:"Debrecen",bullets:["Prepared for and led two weekly Calculus seminars for classes of 27 and 19 students, prepared and graded exams throughout each seminars, and assisted the department in administration.","Substitute teacher in Calculus II. and Introduction to Analysis."]}],certifications:[{id:9,title:"Scientific Computing and Python for Data Science",subtitle:"WorldQuant University",to:2019,summary:""},{id:10,title:"Expert in Official Statistics",subtitle:"University of Sopron",to:2016,summary:""}],awards:[{id:11,title:"Derivatives Modelling Laboratory",subtitle:"",to:2017,summary:"Won 3rd place in a national derivative pricing contest sponsored by i.a. MSCI and Morgan Stanley. The topic was pricing and hedging several types of equity and FX derivatives."},{id:12,title:"Derivatives Modelling Laboratory",subtitle:"",to:2016,summary:"Won 2nd place in a national derivative pricing contest sponsored by i.a. MSCI and Morgan Stanley. The topic was pricing convertible bonds and CoCo bonds."}],skills:[{id:13,title:"Core competencies",subtitle:"",summary:"",bullets:[{type:"Python",level:85},{type:"JavaScript",level:65},{type:"HTML+CSS",level:60},{type:"SQL",level:50},{type:"Git",level:40}]},{id:14,title:"Frameworks",subtitle:"",summary:"",bullets:[{type:"Numpy",level:80},{type:"Pandas",level:80},{type:"Flask",level:65},{type:"scikit-learn",level:50},{type:"ReactJS",level:50}]}]}}},[[19,1,2]]]);
//# sourceMappingURL=main.b2a44450.chunk.js.map