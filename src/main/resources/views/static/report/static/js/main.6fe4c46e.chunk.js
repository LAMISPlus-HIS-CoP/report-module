(this.webpackJsonpLamisPlus=this.webpackJsonpLamisPlus||[]).push([[0],{483:function(e,t,a){},484:function(e,t,a){},575:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),o=a(39),s=a(38),l=(a(208),a(483),a(484),a(485),a(9)),d=a(628),j=a(629),b=a(634),u=a(633),O=a(630),h=a(623),m=a(611),p=a(392),f=(a(302),a(143),a(631)),g=(a(486),a(11)),x=a(19),v=a(67),y=a.n(v),S=a(612),w=a(613),R=a(610),C=new URLSearchParams(window.location.search).get("jwt"),D="/api/v1/",N=a(632),I=a(114),P=a.n(I),A=a(635),B=a(174),T=a(4),_=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),k=function(e){_();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)({organisationUnitId:""}),u=Object(l.a)(b,2),O=u[0],h=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){y.a.get("".concat(D,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){j(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(R.a,{children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"PATIENT LINE LIST"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-4",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",onChange:function(e){h(Object(x.a)(Object(x.a)({},O),{},Object(g.a)({},e.target.name,e.target.value)))},style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(N.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),i(!0),y.a.post("".concat(D,"reporting/patient-line-list?facilityId=").concat(O.organisationUnitId),O.organisationUnitId,{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){i(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});P.a.saveAs(a,"".concat("Patient Line List",".xlsx")),s.b.success(" Report generated successful")})).catch((function(e){if(i(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";s.b.error(t)}else s.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),r&&Object(T.jsxs)(A.a,{icon:!0,children:[Object(T.jsx)(B.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(A.a.Content,{children:[Object(T.jsx)(A.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},E=a(308),U=a.n(E),L=a(440),F=a.n(L),z=a(450),H=a.n(z),M=a(441),V=a.n(M),W=a(448),G=a.n(W),J=a(319),K=a.n(J),X=a(318),q=a.n(X),Y=a(442),Q=a.n(Y),Z=a(443),$=a.n(Z),ee=a(445),te=a.n(ee),ae=a(446),ne=a.n(ae),re=a(447),ie=a.n(re),ce=a(451),oe=a.n(ce),se=a(444),le=a.n(se),de=a(449),je=a.n(de),be=a(452),ue=a.n(be),Oe={Add:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(F.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(V.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(q.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(Q.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(T.jsx)($.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(le.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(te.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(ne.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(ie.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(K.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(G.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(q.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(je.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(H.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(oe.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(T.jsx)(ue.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))}))},he=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),me=function(e){he();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(!1),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)([]),u=Object(l.a)(b,2),O=u[0],h=u[1],p=Object(n.useState)([]),f=Object(l.a)(p,2),v=f[0],I=f[1],P=Object(n.useState)(""),_=Object(l.a)(P,2),k=_[0],E=_[1],L=Object(n.useState)(!1),F=Object(l.a)(L,2),z=F[0],H=F[1],M=Object(n.useState)({facilityId:"",startDate:"",endDate:"",type:""}),V=Object(l.a)(M,2),W=V[0],G=V[1],J=function(e){G(Object(x.a)(Object(x.a)({},W),{},Object(g.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){K()}),[]);var K=function(){y.a.get("".concat(D,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){I(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(R.a,{children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"APPOINTMENT REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Start Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"startDate",id:"startDate",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"End Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"endDate",id:"endDate",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"facilityId",id:"facilityId",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),v.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Type*"}),Object(T.jsxs)("select",{className:"form-control",name:"type",id:"type",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"miss-refill",children:"Missed Refill Appointment"}),Object(T.jsx)("option",{value:"miss-clinic",children:"Missed Clinic Appointment "}),Object(T.jsx)("option",{value:"clinic-appointment",children:"Scheduled Clinic Visit(Clinic Appointment)"}),Object(T.jsx)("option",{value:"refill-appointment",children:"Scheduled Refill Visit(Refill Appointment)"})]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(N.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),i(!0),y.a.get("".concat(D,"reporting/").concat(W.type,"?facilityId=").concat(W.facilityId,"&startDate=").concat(W.startDate,"&endDate=").concat(W.endDate," "),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){i(!1),j(!0),"miss-refill"===W.type?E("Missed Refill Appointment  -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"miss-clinic"===W.type?E("Missed Clinic Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"clinic-appointment"===W.type?E("Clinic Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"refill-appointment"===W.type?E("Refill Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):E(""),h(e.data),e.data.length<=0?H(!0):H(!1)})).catch((function(e){if(i(!1),j(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";s.b.error(t)}else s.b.error("Something went wrong. Please try again...")}))},disabled:""===W.facilityId||""===W.startDate||""===W.endDate||""===W.type})})})]})}),Object(T.jsx)("br",{}),r&&Object(T.jsxs)(A.a,{icon:!0,children:[Object(T.jsx)(B.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(A.a.Content,{children:[Object(T.jsx)(A.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]}),z&&Object(T.jsx)(A.a,{info:!0,children:Object(T.jsx)(A.a.Content,{children:Object(T.jsx)("b",{children:"No Record Found"})})}),d&&Object(T.jsx)(U.a,{icons:Oe,title:k,columns:[{title:"Name",field:"name"},{title:"Hospital Num",field:"hospitalNum"},{title:"Patient Id",field:"patientId"},{title:"DOB",field:"dateBirth"},{title:"Age",field:"age"},{title:"phone",field:"phone"},{title:"Art Start Date",field:"artStartDate"},{title:"Date Of LastVisit",field:"dateOfLastVisit"},{title:"Date Of NextVisit",field:"dateOfNextVisit"},{title:"Current Status",field:"currentStatus"},{title:"Case Manager",field:"caseManager"},{title:"Facility Name",field:"facilityName"},{title:"lga",field:"lga"},{title:"Lga Of Residence",field:"lgaOfResidence"},{title:"state",field:"state"},{title:"State Of Residence",field:"stateOfResidence"}],isLoading:r,data:O.map((function(e){return{name:e.name,hospitalNum:e.hospitalNum,patientId:e.patientId,dateBirth:e.dateBirth,age:e.age,phone:e.phone,artStartDate:e.artStartDate,dateOfLastVisit:e.dateOfLastVisit,dateOfNextVisit:e.dateOfNextVisit,currentStatus:e.currentStatus,caseManager:e.caseManager,facilityName:e.facilityName,lga:e.lga,lgaOfResidence:e.lgaOfResidence,state:e.state,stateOfResidence:e.stateOfResidence}})),options:{headerStyle:{backgroundColor:"#014d88",color:"#fff"},searchFieldStyle:{width:"100%",margingLeft:"250px"},filtering:!1,exportButton:!0,searchFieldAlignment:"left",pageSizeOptions:[10,20,100,500,1e3,2e3,3e3],pageSize:10,debounceInterval:400}})]})})})},pe=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),fe=function(e){pe();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)({organisationUnitId:"",startDate:"",endDate:""}),u=Object(l.a)(b,2),O=u[0],h=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){y.a.get("".concat(D,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){console.log(e.data),j(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))},f=function(e){h(Object(x.a)(Object(x.a)({},O),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(R.a,{children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"RADET REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Start Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"startDate",id:"startDate",value:O.startDate,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"End Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"endDate",id:"endDate",min:O.startDate,value:O.endDate,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",value:O.organisationUnitId,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(N.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),i(!0),y.a.get("".concat(D,"reporting/radet?facilityId=").concat(O.organisationUnitId,"&startDate=").concat(O.startDate,"&endDate=").concat(O.endDate),{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){i(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});P.a.saveAs(a,"".concat("Radet",".xlsx")),s.b.success(" Report generated successful")})).catch((function(e){if(i(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";s.b.error(t)}else s.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),r&&Object(T.jsxs)(A.a,{icon:!0,children:[Object(T.jsx)(B.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(A.a.Content,{children:[Object(T.jsx)(A.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},ge=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),xe=function(e){ge();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)({organisationUnitId:"",startDate:"",endDate:""}),u=Object(l.a)(b,2),O=u[0],h=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){y.a.get("".concat(D,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){j(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))},f=function(e){h(Object(x.a)(Object(x.a)({},O),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(R.a,{children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"BIOMETRIC REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Start Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"startDate",id:"startDate",value:O.startDate,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"End Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"endDate",id:"endDate",min:O.startDate,value:O.endDate,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",value:O.organisationUnitId,onChange:f,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(N.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),i(!0),y.a.get("".concat(D,"reporting/biometric?facilityId=").concat(O.organisationUnitId,"&startDate=").concat(O.startDate,"&endDate=").concat(O.endDate),{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){i(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});P.a.saveAs(a,"".concat("Radet",".xlsx")),s.b.success(" Report generated successful")})).catch((function(e){if(i(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";s.b.error(t)}else s.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),r&&Object(T.jsxs)(A.a,{icon:!0,children:[Object(T.jsx)(B.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(A.a.Content,{children:[Object(T.jsx)(A.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},ve=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),ye=function(e){ve();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)({organisationUnitId:""}),u=Object(l.a)(b,2),O=u[0],h=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){y.a.get("".concat(D,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){j(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(R.a,{children:Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"PHARMACY REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",value:O.organisationUnitId,onChange:function(e){h(Object(x.a)(Object(x.a)({},O),{},Object(g.a)({},e.target.name,e.target.value)))},style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(N.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),i(!0),y.a.get("".concat(D,"reporting/pharmacy?facilityId=").concat(O.organisationUnitId),{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){i(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});P.a.saveAs(a,"".concat("Radet",".xlsx"))})).catch((function(e){if(i(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";s.b.error(t)}else s.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),r&&Object(T.jsxs)(A.a,{icon:!0,children:[Object(T.jsx)(B.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(A.a.Content,{children:[Object(T.jsx)(A.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},Se=Object(p.a)((function(e){return{error:{color:"#f85032",fontSize:"12.8px"},success:{color:"#4BB543 ",fontSize:"11px"}}})),we=function(e){Se();var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=(a[0],a[1],Object(n.useState)("basic")),i=Object(l.a)(r,2),c=i[0],o=i[1],d=Object(n.useState)([]),j=Object(l.a)(d,2),b=j[0],u=j[1],O=function(e){o(e)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(s.a,{autoClose:3e3,hideProgressBar:!0}),Object(T.jsx)(h.a,{children:Object(T.jsx)(m.a,{children:Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("form",{children:[Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"col-md-3 float-start",children:Object(T.jsxs)(f.a,{size:"small",vertical:!0,style:{backgroundColor:"#014D88"},children:[Object(T.jsx)(f.a.Item,{name:"inbox",active:"radet"===c,onClick:function(){return O("radet")},style:{backgroundColor:"radet"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:" RADET REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"appointment"===c,onClick:function(){return O("appointment")},style:{backgroundColor:"appointment"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"APPOINTMENT REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"line-list"===c,onClick:function(){return O("line-list")},style:{backgroundColor:"line-list"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"PATIENT LINE LIST"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"pharmacy-report"===c,onClick:function(){return O("pharmacy-report")},style:{backgroundColor:"pharmacy-report"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"PHARMACY REPORT"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"biometric"===c,onClick:function(){return O("biometric")},style:{backgroundColor:"biometric"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"BIOMETRIC REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"devolve"===c,onClick:function(){return O("devolve")},style:{backgroundColor:"devolve"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"DEVOLVE REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"prep"===c,onClick:function(){return O("prep")},style:{backgroundColor:"prep"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"PREP REPORT"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"ict"===c,onClick:function(){return O("ict")},style:{backgroundColor:"ict"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"ICT TRACKING"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"art"===c,onClick:function(){return O("art")},style:{backgroundColor:"art"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"ART SUMMARY REPORT"})})]})}),Object(T.jsxs)("div",{className:"col-md-9 float-end",style:{backgroundColor:"#fff"},children:["line-list"===c&&Object(T.jsx)(k,{handleItemClick:O,setCompleted:u,completed:b}),"appointment"===c&&Object(T.jsx)(me,{handleItemClick:O,setCompleted:u,completed:b}),"radet"===c&&Object(T.jsx)(fe,{handleItemClick:O,setCompleted:u,completed:b}),"biometric"===c&&Object(T.jsx)(xe,{handleItemClick:O,setCompleted:u,completed:b}),"pharmacy-report"===c&&Object(T.jsx)(ye,{handleItemClick:O,setCompleted:u,completed:b})]})]})})})})]})},Re=a(624),Ce=a(625),De=a(626),Ne=a(627),Ie=Object(p.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:350},button:{margin:e.spacing(1)},root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},error:{color:"#f85032",fontSize:"12.8px"}}})),Pe=function(e){Ie();var t=Object(n.useState)(!1),a=Object(l.a)(t,2);a[0],a[1];return Object(T.jsx)("div",{children:Object(T.jsx)(h.a,{children:Object(T.jsx)(m.a,{children:Object(T.jsxs)(Re.a,{style:{marginTop:"20px"},children:[Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Data Category "}),Object(T.jsxs)(De.a,{type:"select",name:"category",id:"category",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"indicator",children:" Indicator "})]})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Chart Type "}),Object(T.jsxs)(De.a,{type:"select",name:"chart_type",id:"chart_type",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"column",children:" Pie Chart"}),Object(T.jsx)("option",{value:"column",children:" Bar Chart"}),Object(T.jsx)("option",{value:"column",children:" Column Chart "}),Object(T.jsx)("option",{value:"column",children:" Line Chart"}),Object(T.jsx)("option",{value:"column",children:" Area Chart "})]})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Gender "}),Object(T.jsxs)(De.a,{type:"select",name:"gender",id:"gender",children:[Object(T.jsx)("option",{value:"",children:"All"}),Object(T.jsx)("option",{value:"Male",children:"Male "}),Object(T.jsx)("option",{value:"Female",children:" Female "})]})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{for:"exampleSelect",children:"Age Disaggregation"}),Object(T.jsx)(De.a,{type:"text",name:"age_disaggregation",id:"age_disaggregation"}),Object(T.jsx)(Ne.a,{})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Data Element "}),Object(T.jsxs)(De.a,{type:"select",name:"data_element",id:"data_element",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"TX_CURR",children:"TX_CURR "}),Object(T.jsx)("option",{value:"TX_NEW",children:"TX_NEW "}),Object(T.jsx)("option",{value:"PVLS_D",children:"PVLS_D "}),Object(T.jsx)("option",{value:"PVLS_N",children:"PVLS_N "}),Object(T.jsx)("option",{value:"HTS_POS",children:"HTS_POS "}),Object(T.jsx)("option",{value:"HTS",children:"HTS "})]})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"Start Date "}),Object(T.jsx)(De.a,{type:"date",name:"data_element",id:"data_element"})]})}),Object(T.jsx)(Ce.a,{md:"3",children:Object(T.jsxs)(S.a,{children:[Object(T.jsx)(w.a,{children:"End Date "}),Object(T.jsx)(De.a,{type:"date",name:"data_element",id:"data_element"})]})}),Object(T.jsx)(Ce.a,{style:{marginTop:"20px"},children:Object(T.jsxs)(N.a,{icon:!0,labelPosition:"right",color:"blue",children:["Generate Chart Report",Object(T.jsx)(B.a,{name:"right arrow"})]})})]})})})})},Ae={borderRadius:"2px",fontSize:14},Be=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(T.jsxs)(n.Fragment,{children:[Object(T.jsx)("div",{className:"row page-titles mx-0",style:{marginTop:"3px",marginBottom:"10px"},children:Object(T.jsx)("ol",{className:"breadcrumb",children:Object(T.jsx)("li",{className:"breadcrumb-item active",children:Object(T.jsx)("h4",{children:"REPORT"})})})}),Object(T.jsx)(d.a,{children:Object(T.jsx)(j.a,{xl:12,children:Object(T.jsx)(b.a,{style:Ae,children:Object(T.jsx)(b.a.Body,{children:Object(T.jsx)("div",{className:"custom-tab-1",children:Object(T.jsxs)(u.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return r(e)},className:"mb-3",children:[Object(T.jsx)(O.a,{eventKey:"home",title:"GENERAL REPORT",children:Object(T.jsx)(we,{})}),Object(T.jsx)(O.a,{eventKey:"checked-in",title:"REPORT VISUALISATION GENERATOR",children:Object(T.jsx)(Pe,{})})]})})})})})})]})};function Te(){return Object(T.jsx)(o.a,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)(s.a,{}),Object(T.jsx)(o.d,{children:Object(T.jsx)(o.b,{path:"/",children:Object(T.jsx)(Be,{})})})]})})}var _e=a(314),ke=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,803)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},Ee=a(457),Ue="ltr",Le=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:Ue},{typography:"poppins",version:"light",layout:"vertical",primary:"color_5",headerBg:"color_5",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:Ue},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_11",headerBg:"color_1",sidebarBg:"color_11",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_11",direction:Ue},{typography:"poppins",version:"dark",layout:"vertical",headerBg:"color_3",navheaderBg:"color_3",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Ue},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_15",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:Ue},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarBg:"color_9",sidebarStyle:"modern",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_9",direction:Ue}],Fe=Object(n.createContext)(),ze=function(e){var t=Object(n.useState)({value:"full",label:"Full"}),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)({value:"fixed",label:"Fixed"}),o=Object(l.a)(c,2),s=o[0],d=o[1],j=Object(n.useState)({value:"fixed",label:"Fixed"}),b=Object(l.a)(j,2),u=b[0],O=b[1],h=Object(n.useState)({value:"vertical",label:"Vertical"}),m=Object(l.a)(h,2),p=m[0],f=m[1],g=Object(n.useState)({value:"ltr",label:"LTR"}),x=Object(l.a)(g,2),v=x[0],y=x[1],S=Object(n.useState)("color_1"),w=Object(l.a)(S,2),R=w[0],C=w[1],D=Object(n.useState)("color_1"),N=Object(l.a)(D,2),I=N[0],P=N[1],A=Object(n.useState)("color_1"),B=Object(l.a)(A,2),_=B[0],k=B[1],E=Object(n.useState)("color_1"),U=Object(l.a)(E,2),L=U[0],F=U[1],z=Object(n.useState)(!1),H=Object(l.a)(z,2),M=H[0],V=H[1],W=Object(n.useState)(!1),G=Object(l.a)(W,2),J=G[0],K=G[1],X=Object(n.useState)({value:"light",label:"Light"}),q=Object(l.a)(X,2),Y=q[0],Q=q[1],Z=Object(n.useState)({value:"wide-boxed",label:"Wide Boxed"}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=document.querySelector("body"),ne=Object(n.useState)(0),re=Object(l.a)(ne,2),ie=re[0],ce=re[1],oe=Object(n.useState)(0),se=Object(l.a)(oe,2),le=se[0],de=se[1],je=function(e){C(e),ae.setAttribute("data-primary",e)},be=function(e){P(e),ae.setAttribute("data-nav-headerbg",e)},ue=function(e){k(e),ae.setAttribute("data-headerbg",e)},Oe=function(e){F(e),ae.setAttribute("data-sibebarbg",e)},he=function(e){d(e),ae.setAttribute("data-sidebar-position",e.value)},me=function(e){y(e),ae.setAttribute("direction",e.value);var t=document.querySelector("html");t.setAttribute("dir",e.value),t.className=e.value},pe=function(e){"horizontal"===e.value&&"overlay"===r.value?(f(e),ae.setAttribute("data-layout",e.value),i({value:"full",label:"Full"}),ae.setAttribute("data-sidebar-style","full")):(f(e),ae.setAttribute("data-layout",e.value))},fe=function(e){"horizontal"===p.value&&"overlay"===e.value?alert("Sorry! Overlay is not possible in Horizontal layout."):(i(e),V("icon-hover"===e.value?"_i-hover":""),ae.setAttribute("data-sidebar-style",e.value))},ge=function(e){O(e),ae.setAttribute("data-header-position",e.value)},xe=function(e){ae.setAttribute("data-theme-version",e.value),Q(e)},ve=function(e){te(e),ae.setAttribute("data-container",e.value),"boxed"===e.value&&fe({value:"overlay",label:"Overlay"})};return Object(n.useEffect)((function(){var e=document.querySelector("body");e.setAttribute("data-typography","poppins"),e.setAttribute("data-theme-version","light"),e.setAttribute("data-layout","vertical"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-nav-headerbg","color_1"),e.setAttribute("data-headerbg","color_1"),e.setAttribute("data-sidebar-style","overlay"),e.setAttribute("data-sibebarbg","color_1"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-sidebar-position","fixed"),e.setAttribute("data-header-position","fixed"),e.setAttribute("data-container","wide"),e.setAttribute("direction","ltr");var t=function(){ce(window.innerWidth),de(window.innerHeight),window.innerWidth>=768&&window.innerWidth<1024?e.setAttribute("data-sidebar-style","mini"):window.innerWidth<=768?e.setAttribute("data-sidebar-style","overlay"):e.setAttribute("data-sidebar-style","full")};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(T.jsx)(Fe.Provider,{value:{body:ae,sideBarOption:[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],layoutOption:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],backgroundOption:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],sidebarposition:s,headerPositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],containerPosition:[{value:"wide-boxed",label:"Wide Boxed"},{value:"boxed",label:"Boxed"},{value:"wide",label:"Wide"}],directionPosition:[{value:"ltr",label:"LTR"},{value:"rtl",label:"RTL"}],fontFamily:[{value:"poppins",label:"Poppins"},{value:"roboto",label:"Roboto"},{value:"cairo",label:"Cairo"},{value:"opensans",label:"Open Sans"},{value:"HelveticaNeue",label:"HelveticaNeue"}],primaryColor:R,navigationHader:I,windowWidth:ie,windowHeight:le,changePrimaryColor:je,changeNavigationHader:be,changeSideBarStyle:fe,sideBarStyle:r,changeSideBarPostion:he,sidebarpositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],changeHeaderPostion:ge,headerposition:u,changeSideBarLayout:pe,sidebarLayout:p,changeDirectionLayout:me,changeContainerPosition:ve,direction:v,colors:["color_1","color_2","color_3","color_4","color_5","color_6","color_7","color_8","color_9","color_10","color_11","color_12","color_13","color_14","color_15"],haderColor:_,chnageHaderColor:ue,chnageSidebarColor:Oe,sidebarColor:L,iconHover:M,menuToggle:J,openMenuToggle:function(){"overly"===r.value?K(!0):K(!1)},changeBackground:xe,background:Y,containerPosition_:ee,setDemoTheme:function(e,t){var a={},n=Le[e];ae.setAttribute("data-typography",n.typography),a.value=n.version,xe(a),a.value=n.layout,pe(a),je(n.primary),be(n.navheaderBg),ue(n.headerBg),a.value=n.sidebarStyle,fe(a),Oe(n.sidebarBg),a.value=n.sidebarPosition,he(a),a.value=n.headerPosition,ge(a),a.value=n.containerLayout,ve(a),a.value=t,me(a)}},children:e.children})};c.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(Ee.a,{children:Object(T.jsx)(_e.a,{basename:"/",children:Object(T.jsx)(ze,{children:Object(T.jsx)(Te,{})})})})}),document.getElementById("root")),ke()}},[[575,1,2]]]);
//# sourceMappingURL=main.6fe4c46e.chunk.js.map