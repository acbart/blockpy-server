var frontend;frontend=(()=>{"use strict";var e={460:(e,t,s)=>{s.r(t),s.d(t,{Assignment:()=>L,AssignmentGroup:()=>v,GroupList:()=>_,Server:()=>z,User:()=>E,Watcher:()=>K,dateCreatedSorter:()=>f,launchEditor:()=>J});const n=ko,i=CodeMirror,a=hljs;function r(e,t){let s=e();return e.valueWillMutate(),n.utils.arrayPushAll(s,t),e.valueHasMutated(),e}n.bindingHandlers.codemirror={init:function(e,t){let s=n.unwrap(t());e.editor=i(e,n.toJS(s)),e.editor.on("change",(function(e){s.readOnly||s.value(e.getValue())})),n.utils.domNodeDisposal.addDisposeCallback(e,(function(){let t=e.editor.getWrapperElement();t.parentNode.removeChild(t)}))},update:function(e,t){let s=n.toJS(t()).value;if(e.editor){let t=e.editor.getCursor();e.editor.setValue(s),e.editor.setCursor(t),e.editor.refresh()}}},a.configure({languages:["python"]}),n.bindingHandlers.highlightedCode={update:function(e,t){let s=n.unwrap(t());e.innerHTML=s,a.highlightBlock(e),s.trim()&&a.lineNumbersBlock(e)}};class o{constructor(e){this.map=new Map,this.lefts=[],this.rights=[];for(let t in e)this.lefts.push(t),this.rights.push(e[t]),this.map.set(t,e[t]),this.map.set(e[t],t)}get(e){return this.map.get(e)}}function d(e){return e[e.length-1]}function l(e,t){return $.get(window.$URL_ROOT+e,t)}n.bindingHandlers.multiselect={init:function(e,t,s){let i=t();n.bindingHandlers.options.update(e,(()=>i.options),s),n.bindingHandlers.selectedOptions.init(e,(()=>i.selectedOptions),s),n.bindingHandlers.selectedOptions.update(e,(()=>i.selectedOptions),s),$(e).multiSelect(i.config),$(e).multiSelect({afterSelect:function(e){for(let t=0;t<e.length;t+=1)i.selectedOptions.push(e[t])},afterDeselect:function(e){for(let t=0;t<e.length;t+=1)i.selectedOptions.remove(e[t])}})},update:function(e,t,s){let i=t();console.log(i.options(),i.selectedOptions()),n.bindingHandlers.selectedOptions.update(e,(()=>i.selectedOptions),s),i.options().forEach((t=>{$(e).multiSelect("addOption",{value:t.id,text:t[i.optionsText]()})})),$(e).multiSelect("refresh")}};const c=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function m(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function h(e){if(void 0===e)return"Undefined Time";let t=new Date,s=new Date(e);if(m(t,s))return"Today at "+s.toLocaleTimeString();{let e=u[s.getDay()]+", "+c[s.getMonth()]+" "+s.getDate();return t.getFullYear()===s.getFullYear()?e+" at "+s.toLocaleTimeString():e+", "+s.getFullYear()+" at "+s.toLocaleTimeString()}}function p(e){if(void 0===e)return"Undefined Time";let t=new Date,s=new Date(parseInt(e,10));if(m(t,s))return"Today";{let e=u[s.getDay()]+", "+c[s.getMonth()]+" "+s.getDate();return t.getFullYear()===s.getFullYear()?e:e+", "+s.getFullYear()}}function g(e,t){if(null===e)return"Never";let s=new Date(parseInt(e,10)),n=null===t?new Date:new Date(parseInt(t,10)),i=Math.abs(n.getTime()-s.getTime())/1e3,a=n.getTime()>s.getTime()?" earlier":" later",r=Math.floor(i/31536e3),o=Math.floor(i%31536e3/86400),d=Math.floor(i%86400/3600),l=Math.floor(i%3600/60),c=Math.floor(i%60),u=`${o} day${1!==o?"s":""}`,m=`${d} hour${1!==d?"s":""}`,h=`${l} minute${1!==l?"s":""}`,p=`${c} second${1!==c?"s":""}`;return i<1?"At this time":i<60?p+a:i<600?h+", "+p+a:i<3600?h+a:i<86400?m+", "+h+a:i<31536e3?u+", "+m+a:`${r} year${1!==r?"s":""}, `+u+a}class b{constructor(e){this.FIELDS=new o({date_modified:"dateModified",date_created:"dateCreated"}),this.id=e.id,this.dateModified=n.observable(e.date_modified),this.dateCreated=n.observable(e.date_created),this.prettyDateCreated=n.pureComputed((()=>h(this.dateCreated()))),this.prettyDateModified=n.pureComputed((()=>h(this.dateModified())))}fromJson(e){this.FIELDS.lefts.forEach((t=>{this[this.FIELDS.get(t)](e[t])}))}koFromJson(e){this.FIELDS.lefts.forEach((t=>{this[this.FIELDS.get(t)]=n.observable(e[t])}))}toJson(){let e={id:this.id};return this.FIELDS.rights.forEach((t=>e[this.FIELDS.get(t)]=this[t]())),e}}function f(e,t){return e.dateCreated()===t.dateCreated()?0:e.dateCreated()<t.dateCreated()?-1:1}class S{constructor(e,t,s){this.data={},this.courseId=e,this.delayedData=[],this.timer=null,void 0!==s&&s.map((e=>this.newInstance(e))),void 0!==t&&t.map((e=>this.getInstance(e)))}getInstance(e){if(void 0!==this.data[e])return this.data[e];{let t=this.makeEmptyInstance(e);return this.delayLoadInstance(t),this.data[e]=t,t}}delayLoadInstance(e){clearTimeout(this.timer),this.delayedData.push(e),this.queueFinishDelay()}queueFinishDelay(){this.delayedData.length>25?this.finishDelayedLoads():this.delayedData.length>0&&(this.timer=window.setTimeout(this.finishDelayedLoads.bind(this),1e3))}getInstances(e){return e.map(this.getInstance.bind(this))}getLoaded(){return Object.keys(this.data).map((e=>this.data[e]))}getAllAvailable(){let e=this.getPayload(),t=this.getUrl();return new Promise(((s,n)=>{l(t,e).then((e=>{if(e.success){let t=e[this.GET_FIELD].map((e=>this.newInstance(e)));s(t)}else n(e)}))}))}trackInstance(e){return this.data[e.id]=e,e}newInstance(e){return this.data[e.id]=this.makeEmptyInstance(e.id),this.data[e.id].fromJson(e),this.data[e.id]}finishDelayedLoads(){let e=this.getPayload(),t=this.getUrl();return this.delayedData.length=0,l(t,e).then((e=>{if(e.success){let t=e[this.GET_FIELD].map((e=>(this.data[e.id].fromJson(e),e.id)));this.removeDelayedInstances(t)}else console.error(e)}))}getDelayedIds(){return this.delayedData.map((e=>e.id))}removeDelayedInstances(e){this.delayedData=this.delayedData.filter((t=>!e.includes(t.id))),this.queueFinishDelay()}}class v extends b{constructor(e){super(e),this.FIELDS=new o({name:"name",url:"url",position:"position",forked_id:"forkedId",forked_version:"forkedVersion",owner_id:"ownerId",course_id:"courseId",version:"version",date_modified:"dateModified",date_created:"dateCreated"}),this.koFromJson(e)}}class I extends S{constructor(){super(...arguments),this.GET_FIELD="assignment_groups"}getPayload(){return{assignment_group_ids:this.getDelayedIds().join(","),course_id:this.courseId}}getUrl(){return"assignment_groups/get_ids"}makeEmptyInstance(e){return new v({id:e,date_created:null,date_modified:null,name:"Unknown",url:"",position:0,forked_id:0,forked_version:0,owner_id:0,course_id:0,version:0})}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_ASSIGNMENT_GROUPS`}}n.components.register("assignment-group",{viewModel:v,template:'\n    <div>Assignment Group: <span data-bind="text: name"></span></div>\n'});class _{constructor(){this.groups=n.observableArray([]),$().ready((()=>this.load()))}load(){l("get/",{course_id:3}).then((e=>{this.groups(e.groups.map((e=>new v(e))))}))}}n.components.register("group-list",{viewModel:_,template:'\n    <div>Groups:\n        <div data-bind="foreach: groups">\n            <div data-bind="component: {name: \'assignment-group\', params: $data}"></assignment-group>\n        </div>\n    </div>\n'});class y extends b{constructor(e){super(e),this.FIELDS=new o({user_id:"userId",course_id:"courseId",name:"name",date_modified:"dateModified",date_created:"dateCreated"}),this.koFromJson(e)}}class E extends b{constructor(e){super(e),this.FIELDS=new o({email:"email",first_name:"firstName",last_name:"lastName"}),this.koFromJson(e),this.name=n.pureComputed((()=>this.firstName()+" "+this.lastName()),this),this.primaryRole=n.pureComputed((()=>this.roles().length?this.roles().map((e=>{return"string"!=typeof(t=e.name().replace("urn:lti:role:ims/lis/",""))?"":t.charAt(0).toUpperCase()+t.slice(1);var t})).join("/"):"User"),this)}koFromJson(e){super.koFromJson(e);let t=[];e.roles&&(t=e.roles.map((e=>new y(e)))),this.roles=n.observableArray(t)}fromJson(e){super.fromJson(e),this.roles.removeAll(),e.roles&&e.roles.forEach((e=>this.roles.push(new y(e))))}toJson(){let e=super.toJson();return e.roles=this.roles().map((e=>e.toJson())),e}}class w extends S{constructor(){super(...arguments),this.GET_FIELD="users"}getPayload(){return{user_ids:this.getDelayedIds().join(","),course_id:this.courseId}}getUrl(){return"courses/users"}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_USERS`}makeEmptyInstance(e){return new E({id:e,email:"",date_created:null,date_modified:null,first_name:"",last_name:"Unknown"})}}n.components.register("user",{viewModel:E,template:'\n    <div>User: <span data-bind="text: name"></span></div>\n'}),n.components.register("user-short",{template:'\n    <div><span data-bind="text: primaryRole"></span>: <span data-bind="text: name"></span> (<span data-bind="text: email"></span>)</div>\n'});class L extends b{constructor(e){super(e),this.FIELDS=new o({name:"name",url:"url",type:"type",instructions:"instructions",reviewed:"reviewed",hidden:"hidden",public:"public",ip_ranges:"ipRanges",settings:"settings",on_run:"onRun",on_change:"onChange",on_eval:"onEval",starting_code:"startingCode",extra_instructor_files:"extraInstructorFiles",extra_starting_files:"extraStartingFiles",forked_id:"forkedId",forked_version:"forkedVersion",owner_id:"ownerId",course_id:"courseId",version:"version",date_modified:"dateModified",date_created:"dateCreated"}),this.koFromJson(e)}}class k extends S{constructor(){super(...arguments),this.GET_FIELD="assignments"}getPayload(){return{assignment_ids:this.getDelayedIds().join(","),course_id:this.courseId}}getUrl(){return"assignments/get_ids"}makeEmptyInstance(e){return new L({id:e,date_created:null,date_modified:null,name:"Unknown",url:"",type:"unknown",instructions:"",reviewed:!1,hidden:!1,public:!1,ip_ranges:"",settings:"",on_run:"",on_change:"",on_eval:"",starting_code:"",extra_instructor_files:"",extra_starting_files:"",forked_id:0,forked_version:0,owner_id:0,course_id:0,version:0})}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_ASSIGNMENTS`}}n.components.register("assignment",{viewModel:L,template:'\n    <div>Assignment: <span data-bind="text: name"></span></div>\n'}),n.components.register("assignment-short",{template:'\n    <div>Assignment: <span data-bind="text: name"></span> (<span data-bind="text: url"></span>)</div>\n'});class T extends b{constructor(e){super(e),this.FIELDS=new o({date_modified:"dateModified",date_created:"dateCreated",assignment_id:"assignmentId",assignment_version:"assignmentVersion",course_id:"courseId",subject_id:"subjectId",event_type:"eventType",file_path:"filePath",category:"category",label:"label",message:"message",client_timestamp:"clientTimestamp",client_timezone:"clientTimezone"}),this.koFromJson(e)}getAsSubmissionKey(){return[this.courseId(),this.subjectId(),this.assignmentId()].join(",")}isEditEvent(){return"File.Edit"===this.eventType()||"File.Create"===this.eventType()}}const x={"Session.Start":"Began session","X-IP.Change":"Changed IP address","File.Edit":"Edited code","File.Create":"Started assignment","Run.Program":"Ran program","Compile.Error":"Syntax error","X-Submission.LMS":"Updated grade"};class D{constructor(e){this.name=n.observable(e.name),this.ids=n.observableArray(e.ids),this.default=n.observable(e.default)}getIds(){return this.ids().join(",")}toJson(){return{name:this.name(),ids:this.ids(),default:this.default()}}getStored(){return this.default()?"":this.getIds()}}var M;!function(e){e.ALL="ALL",e.SINGLE="SINGLE",e.SET="SET"}(M||(M={}));class O{constructor(e){this.store=e.store,this.available=n.observableArray([]),this.isLoading=n.observable(!0),this.store.getAllAvailable().then((t=>{r(this.available,t),this.sets()[0].ids(t.map((e=>e.id))),this.loadDefault(e.default),this.isLoading(!1)})),this.selectMode=n.observable(M.ALL),this.singleSet=n.observable(new D({default:!1,ids:[],name:"Just this one"})),this.singleOption=n.observable(null);let t=this.loadFromLocalStorage().map((e=>new D(e)));this.sets=n.observableArray(t),this.currentSet=e.modelSet,this.currentSet(this.sets()[0]),this.editorVisible=n.observable(!1),this.selectedOptions=n.observableArray([]),this.bulkEditor=n.observable(""),this.currentSet.subscribe((()=>{this.editorVisible()&&this.selectedOptions(this.currentSet().ids())})),this.singleOption.subscribe((()=>{this.singleSet().ids([this.singleOption()]),this.currentSet(this.singleSet())})),this.selectMode.subscribe((()=>{switch(this.selectMode()){case M.ALL:case M.SET:this.currentSet(this.sets()[0]);break;case M.SINGLE:this.currentSet(this.singleSet())}}),this),this.selectedOptions.subscribe((e=>{if(this.currentSet().default()&&e.some((e=>"deleted"===e.status))){let e=this.selectedOptions();this.startAdding(e)}}),this,"arrayChange"),this.prettyResult=n.pureComputed((()=>this.currentSet().ids().map((e=>this.store.getInstance(e)))),this)}getDefaultGroupSetName(){return"Everything"}getNewGroupSetName(){return"New set"}loadFromLocalStorage(){let e=localStorage.getItem(this.store.getLocalStorageKey());return null===e?[{name:this.getDefaultGroupSetName(),default:!0,ids:[]}]:JSON.parse(e)}startEditing(){this.editorVisible(!0),this.selectedOptions(this.currentSet().ids())}startAdding(e){let t=new D({name:this.getNewGroupSetName(),default:!1,ids:e||[]});return this.sets.push(t),this.currentSet(t),this.editorVisible(!0),t}addAsEmails(){}loadDefault(e){if(console.log(e),"first"===e)this.selectMode(M.SINGLE),this.singleOption(this.available()[0].id);else if("all"===e||""===e.trim())this.selectMode(M.ALL),this.currentSet(this.sets()[0]);else{let t=e.split(",").map((e=>parseInt(e,10)));switch(t.length){case 0:case this.available().length:this.selectMode(M.ALL),this.currentSet(this.sets()[0]);break;case 1:this.available().some((e=>e.id===t[0]))&&(this.selectMode(M.SINGLE),this.singleOption(t[0]));break;default:this.sets().forEach((e=>{(function(e,t){const s={};for(const t of e)s[t]=1;for(const e of t){if(!s[e])return!1;s[e]=2}for(let e in s)if(1===s[e])return!1;return!0})(e.ids(),t)&&(this.selectMode(M.SET),this.currentSet(e))}))}}}deleteSet(){if(this.currentSet().default())return this.editorVisible(!1),!1;if(confirm("Are you sure you want to delete this set?")){let e=this.currentSet();return this.currentSet(this.sets()[0]),this.sets.remove(e),this.saveToLocalStorage(),this.editorVisible(!1),!0}return!1}saveSet(){this.currentSet().ids(this.selectedOptions()),this.saveToLocalStorage(),this.editorVisible(!1)}cancelEdit(){this.editorVisible(!1)}saveToLocalStorage(){let e=JSON.stringify(this.sets().map((e=>e.toJson())));localStorage.setItem(this.store.getLocalStorageKey(),e)}}const C=e=>`\n    <div>\n        \x3c!-- Mode Select --\x3e\n        <div class="form-check form-check-inline">\n            <input class="form-check-input"\n                   data-bind="checked: selectMode, disable: isLoading"\n                   type="radio" name="${e}" id="${e}1" value="ALL">\n            <label class="form-check-label" for="${e}1">\n                All\n            </label>\n        </div>\n        <div class="form-check form-check-inline">\n            <input class="form-check-input"\n                   data-bind="checked: selectMode, disable: isLoading"\n                   type="radio" name="${e}" id="${e}2" value="SINGLE">\n            <label class="form-check-label" for="${e}2">\n                Only\n            </label>\n        </div>\n        <div class="form-check form-check-inline">\n            <input class="form-check-input"\n                   data-bind="checked: selectMode, disable: isLoading"\n                   type="radio" name="${e}" id="${e}3" value="SET">\n            <label class="form-check-label" for="${e}3">\n                ${e} set\n            </label>\n        </div>\n        \n        \x3c!-- Single Person --\x3e\n        <div data-bind="if: selectMode()==='SINGLE'">\n        <form class="form-inline">\n        <select data-bind="options: available, value: singleOption, optionsText: 'name', optionsValue: 'id'"\n                class="form-control custom-select ml-2 custom-select-sm"\n        ></select>\n        </form>\n        </div>\n        \n        \x3c!-- Subset --\x3e\n        <div data-bind="if: selectMode()==='SET'">\n        <form class="form-inline">\n            Show ${e} set:\n            <select data-bind="options: sets,\n                               optionsText: 'name',\n                               valueAllowUnset: true,\n                               value: currentSet"\n                    class="form-control custom-select ml-2 custom-select-sm">\n            </select>\n            <button type="button" class="btn btn-sm btn-outline-secondary ml-2"\n                    data-bind="click: startEditing, visible: !editorVisible()">\n                    <span class="fas fa-edit"></span>\n                    Edit this ${e} set</button>\n            <button type="button" class="btn btn-sm btn-outline-secondary ml-2"\n                    data-bind="click: startAdding, visible: !editorVisible()">\n                    <span class="fas fa-plus"></span>\n                    Add new ${e} set</button>\n                                             \n        </form>\n        <div data-bind="if: editorVisible">\n            <label>Current ${e} set name:\n                <input type="text" data-bind="value: currentSet().name, disable: currentSet().default">\n            </label><br>\n           <select multiple=multiple style="width: 100%"\n                 data-bind="selectedOptions: selectedOptions, valueAllowUnset: true,\n                              options: available, optionsText: 'name', optionsValue: 'id', \n                              select2: { placeholder: '${e}', allowClear: true }"></select>\n\n            \x3c!-- Incomplete\n            <label style="min-width: 100%">Bulk Editor (separated by commas):\n                <button type="button" class="btn btn-outline-secondary btn-sm"\n                    data-bind="click: addAsEmails">Add as Emails</button>\n                <br>\n                <textarea data-bind="value: currentSet().emails,\n                                     disable: currentSet().default"\n                 style="min-width: 100%"></textarea></label><br>\n             --\x3e\n            <button type="button" class="btn btn-danger btn-sm float-right mt-2"\n                    data-bind="click: deleteSet">Delete current ${e} set</button>\n            <button type="button" class="btn btn-success btn-sm mt-2"\n                    data-bind="click: saveSet">Save ${e} set</button>\n            <button type="button" class="btn btn-outline-secondary btn-sm mt-2 ml-4"\n                    data-bind="click: cancelEdit">Cancel changes</button>\n        </div>\n        </div>\n        <div data-bind="ifnot: editorVisible">\n            <div data-bind="if: isLoading">\n                <div class="spinner-loader" role="status">\n                    <span class="sr-only">Loading...</span>\n                </div>\n            </div>\n            <div data-bind="ifnot: isLoading">\n                Included ${e}(s): \n                <span data-bind="foreach: prettyResult">\n                    <span data-bind="text: name"></span>, \n                </span>\n            </div>\n        </div>\n    </div>`;var N,A,R,F,P,U;n.components.register("user-set-selector",{viewModel:class extends O{constructor(e){super(e)}getDefaultGroupSetName(){return"All students"}getNewGroupSetName(){return"New user set"}},template:C("User")}),n.components.register("assignment-set-selector",{viewModel:class extends O{constructor(e){super(e)}getDefaultGroupSetName(){return"All assignments"}getNewGroupSetName(){return"New assignment set"}},template:C("Assignment")}),function(e){e.INITIALIZED="Initialized",e.STARTED="Started",e.IN_PROGRESS="inProgress",e.SUBMITTED="Submitted",e.COMPLETED="Completed"}(N||(N={})),function(e){e.FULLY_GRADED="FullyGraded",e.PENDING="Pending",e.PENDING_MANUAL="PendingManual",e.FAILED="Failed",e.NOT_READY="NotReady"}(A||(A={}));class G extends b{constructor(e){super(e),this.FIELDS=new o({date_modified:"dateModified",date_created:"dateCreated",code:"code",extra_files:"extraFiles",url:"url",endpoint:"endpoint",score:"score",correct:"correct",submission_status:"submissionStatus",grading_status:"gradingStatus",assignment_id:"assignmentId",assignment_group_id:"assignmentGroupId",assignment_version:"assignmentVersion",course_id:"courseId",user_id:"userId",version:"version"}),this.koFromJson(e)}getAsSubmissionKey(){return[this.courseId(),this.userId(),this.assignmentId()].join(",")}checkGrading(e){return this.gradingStatus().toLowerCase()===e.toLowerCase()}checkSubmission(e){return this.submissionStatus().toLowerCase()===e.toLowerCase()}}class V extends S{constructor(){super(...arguments),this.GET_FIELD="submissions"}getPayload(){return{submission_ids:this.getDelayedIds().join(","),course_id:this.courseId}}getUrl(){return"submission/get_ids"}makeEmptyInstance(e){return new G({assignment_group_id:null,assignment_id:null,assignment_version:0,code:"",correct:!1,course_id:null,endpoint:"",extra_files:"",grading_status:A.NOT_READY,score:0,submission_status:N.INITIALIZED,url:"",user_id:void 0,version:0,id:e,date_created:null,date_modified:null})}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_SUBMISSIONS`}}function J(e,t){var s=document.createElement("form");s.setAttribute("method","post"),s.setAttribute("action",window.$URL_ROOT+"blockpy/load_readonly"),s.setAttribute("target","_blank");let n={user:{role:"instructor"},assignment:e?e.toJson():null,submission:t?t.toJson():null};n.assignment.forked_id=e.id,n.assignment.forked_version=e.version(),n.assignment.id=null,n.assignment.url="",n.assignment.course_id=null,n.submission.id=null,n.submission.endpoint="",n.submission.url="",n.submission.user_id=null,n.submission.course_id=null,n.submission.assignment_id=null,n.submission.grading_status=A.NOT_READY,n.submission.submission_status=N.IN_PROGRESS;var i=document.createElement("input");i.setAttribute("type","hidden"),i.setAttribute("name","assignment_data"),i.setAttribute("value",JSON.stringify(n,null,2)),s.appendChild(i),document.body.appendChild(s),s.submit()}!function(e){e[e.FROZEN_LATEST=0]="FROZEN_LATEST",e[e.POLL=1]="POLL",e[e.REVIEW=2]="REVIEW"}(R||(R={}));class j{constructor(e,t){this.makeNextState(e,t)}getPrettyTime(){return e=this.log.clientTimestamp(),h(parseInt(e,10));var e}getPrettyLastEdit(e){let t=e===R.REVIEW?this.log.clientTimestamp():null;return g(this.lastEdit,t)}getPrettyLastRan(e){let t=e===R.REVIEW?this.log.clientTimestamp():null;return g(this.lastRan,t)}getPrettyLastOpened(e){let t=e===R.REVIEW?this.log.clientTimestamp():null;return g(this.lastOpened,t)}copyState(e){null===e?(this.code="",this.friendly="Not Loaded",this.lastRan=null,this.lastEdit=null,this.lastOpened=null,this.completed=!1,this.score=0,this.mode="unknown",this.fullscreen=!1,this.log=null):(this.code=e.code,this.lastRan=e.lastRan,this.lastEdit=e.lastEdit,this.lastOpened=e.lastOpened,this.completed=e.completed,this.score=e.score,this.mode=e.mode,this.fullscreen=e.fullscreen,this.log=null)}makeNextState(e,t){switch(this.copyState(e),this.log=t,this.friendly=x[t.eventType()],t.eventType()){case"File.Create":case"File.Edit":this.code=t.message(),this.lastEdit=t.clientTimestamp();break;case"Session.Start":this.lastOpened=t.clientTimestamp();break;case"Run.Program":this.lastRan=t.clientTimestamp();break;case"Intervention":this.completed="Complete"===t.category();break;case"X-View.Change":this.mode=t.message();break;case"X-Submission.LMS":this.score=parseInt(t.message(),10)}}}class B{constructor(e,t,s){this.states=n.observableArray([]),this.currentStateIndex=n.observable(0),this.user=t,this.assignment=s,this.watchMode=n.observable(R.FROZEN_LATEST),this.isVcrActive=n.pureComputed((()=>this.watchMode()===R.REVIEW),this),this.getWatchModeClass=n.pureComputed((()=>{switch(this.watchMode()){case R.FROZEN_LATEST:return"fa-pause-circle";case R.POLL:return"fa-eye";case R.REVIEW:return"fa-history"}}),this),this.currentState=n.pureComputed((()=>{if(this.states().length>0)return this.watchMode()===R.REVIEW?this.states()[this.getCurrentStateIndex()]:d(this.states());console.error("No states are currently loaded!")}),this)}getCurrentStateIndex(){return parseInt(this.currentStateIndex(),10)}addLogs(e){let t=[],s=this.states().length?d(this.states()):null;for(let n=0;n<e.length;n+=1){let i=new j(s,e[n]);t.push(i),s=i}r(this.states,t)}loadHistorySelector(e){let t,s=this.getSelector(e);s.empty();let n=null;for(t=0;t<this.states().length;t+=1){let e=this.states()[t].log,a=p(e.clientTimestamp());null!==n&&n.attr("label")==a||(n=$("<optgroup></optgroup>"),n.attr("label",a),s.append(n));let r=x[e.eventType()]||e.eventType(),o=(void 0===(i=e.clientTimestamp())?"Undefined Time":new Date(parseInt(i,10)).toLocaleTimeString())+" - "+r,d=$("<option></option>",{text:o});d.attr("value",t),n.append(d)}var i;this.currentStateIndex(t-1)}switchWatchMode(e,t){switch(this.watchMode()){case R.FROZEN_LATEST:this.watchMode(R.POLL);break;case R.POLL:this.loadHistorySelector(t),this.watchMode(R.REVIEW);break;case R.REVIEW:this.watchMode(R.FROZEN_LATEST)}}getSelector(e){return $(e.target).closest("div").find(".history-select")}moveToMostRecent(e,t){this.currentStateIndex(this.states().length-1)}moveToBack(e,t){this.currentStateIndex(Math.max(0,this.getCurrentStateIndex()-1))}seekToBack(e,t){let s,n=this.getCurrentStateIndex();do{n-=1,s=this.states()[n]}while(n>0&&!s.log.isEditEvent());this.currentStateIndex(n)}moveToNext(e,t){this.currentStateIndex(Math.min(this.states().length-1,this.getCurrentStateIndex()+1))}seekToNext(e,t){let s,n=this.getCurrentStateIndex();do{n+=1,s=this.states()[n]}while(n<this.states().length-1&&!s.log.isEditEvent());this.currentStateIndex(n)}moveToStart(e,t){this.currentStateIndex(0)}launchEditor(){J(this.assignment,this.submission)}}n.components.register("submission-history-card",{template:'\n<div class="">\n    <div data-bind="component: {name: \'user-short\', params: user}"></div>\n    <div data-bind="component: {name: \'assignment-short\', params: assignment}"></div>\n    <div>Logged Time: <span data-bind="text: currentState().getPrettyTime()"></span></div>\n    <div>Last Edited: <span data-bind="text: currentState().getPrettyLastEdit(watchMode())"></span></div>\n    <div>Last Ran: <span data-bind="text: currentState().getPrettyLastRan(watchMode())"></span></div>\n    <div>Last Opened: <span data-bind="text: currentState().getPrettyLastOpened(watchMode())"></span></div>\n    <div>Score: <span data-bind="text: currentState().completed ? \'Correct\' : \'Incomplete\'"></span> (<span data-bind="text: currentState().score"></span>)</div>\n</div>\n    <div>Open in <a href="#" data-bind="click: $parent.launchEditor.bind($parent)">Readonly Editor</a></div>\n    <pre class="python-code-block"><code data-bind="highlightedCode: currentState().code" class="python" style="height: 200px"></code></pre>\n'}),n.components.register("submission-history-vcr",{template:'\n<div class="col-md-12" data-bind="visible: $parent.isVcrActive()">\n    <form class="form-inline">\n        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n            data-bind="click: $parent.moveToStart.bind($parent)">\n            <span class=\'fas fa-step-backward\'></span> Start\n        </button>\n        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n            data-bind="click: $parent.seekToBack.bind($parent)">\n            <span class=\'fas fa-fast-backward\'></span>\n        </button>\n        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n            data-bind="click: $parent.moveToBack.bind($parent)">\n            <span class=\'fas fa-backward\'></span> Back\n        </button>\n        <select class="history-select form-control custom-select mr-2 custom-select-sm"\n            data-bind="value: $parent.currentStateIndex"\n            aria-title="History Selector">\n        </select>\n        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n            data-bind="click: $parent.moveToNext.bind($parent)">\n            <span class=\'fas fa-forward\'></span> Next\n        </button>\n        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n            data-bind="click: $parent.seekToNext.bind($parent)">\n            <span class=\'fas fa-fast-forward\'></span>\n        </button>\n        <button class="btn btn-outline-secondary btn-sm" type="button"\n            data-bind="click: $parent.moveToMostRecent.bind($parent)">\n            <span class=\'fas fa-step-forward\'></span> Most Recent\n        </button>\n    </form>\n</div>\n'}),function(e){e[e.NONE=0]="NONE",e[e.ASSIGNMENT=1]="ASSIGNMENT",e[e.USER=2]="USER"}(F||(F={}));class K{constructor(e){this.courseId=n.observable(e.courseId),this.userIds=e.userIds,this.assignmentIds=e.assignmentIds,this.userSet=n.observable(null),this.assignmentSet=n.observable(null),this.grouping=n.observable(F.NONE),this.submissions=n.observableArray([]),this.cauToSubmission={},this.userStore=new w(e.courseId,[],[]),this.assignmentStore=new k(e.courseId,[],[])}addLogs(e){let t={};for(let s=0;s<e.length;s+=1){let n=new T(e[s]),i=n.getAsSubmissionKey();if(!(i in this.cauToSubmission)){let e=this.userStore.getInstance(n.subjectId()),t=this.assignmentStore.getInstance(n.assignmentId());this.cauToSubmission[i]=new B(n,e,t),this.submissions.push(this.cauToSubmission[i])}i in t||(t[i]=[]),t[i].push(n)}for(let e in t)this.cauToSubmission[e].addLogs(t[e])}addSubmissions(e){for(let t=0;t<e.length;t+=1){let s=new G(e[t]),n=s.getAsSubmissionKey();console.log(this.cauToSubmission[n]),this.cauToSubmission[n].submission=s}}getLatest(){localStorage.setItem("BLOCKPY_SERVER_USERIDS",this.userSet().getStored()),localStorage.setItem("BLOCKPY_SERVER_ASSIGNMENTIDS",this.assignmentSet().getStored()),l("blockpy/load_history",{assignment_id:this.assignmentSet().getIds(),course_id:this.courseId(),user_id:this.userSet().getIds(),with_submission:!0}).then((e=>{e.success?(this.addLogs(e.history),this.addSubmissions(e.submissions)):console.error(e)}))}}n.components.register("watcher",{viewModel:K,template:'\n    <div>\n    User(s):\n        <user-set-selector params="store: userStore, modelSet: userSet, default: userIds"></user-set-selector>\n    </div>\n    <div class="mt-4 mb-4">\n    Assignment(s):\n        <assignment-set-selector params="store: assignmentStore, modelSet: assignmentSet, default: assignmentIds"></assignment-set-selector>\n    </div>\n    <div class="mb-4 mt-4">\n        <button class="btn btn-primary" data-bind="click: getLatest">Load Events</button>\n    </div>\n    <div>\n        <div data-bind="foreach: submissions" class="row">\n            <div class="col-sm-6 mb-4">\n            <div class="">\n                <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"\n                    data-bind="click: switchWatchMode">\n                    <span class=\'fas\' data-bind="class: getWatchModeClass"></span>\n                </button>\n                \x3c!-- ko if: states().length>0 --\x3e\n                    <submission-history-vcr></submission-history-vcr>\n                    <submission-history-card params="currentState: currentState, watchMode: watchMode, user: user, assignment: assignment"></submission-history-card>\n                \x3c!-- /ko --\x3e\n            </div>\n            </div>\n        </div>\n    </div>\n'}),function(e){e.NATIVE="native",e.LTI="lti"}(P||(P={})),function(e){e.PRIVATE="private",e.PUBLIC="public"}(U||(U={}));class Y extends b{constructor(e){super(e),this.FIELDS=new o({name:"name",url:"url",owner_id:"ownerId",service:"service",external_id:"externalId",endpoint:"endpoint",visibility:"visibility",term:"term",settings:"settings",date_modified:"dateModified",date_created:"dateCreated"}),this.koFromJson(e)}}class W extends S{constructor(){super(...arguments),this.GET_FIELD="courses"}getPayload(){return{course_id:this.courseId}}getUrl(){return"courses"}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_COURSES`}makeEmptyInstance(e){return new Y({id:e,date_created:null,date_modified:null,endpoint:"",external_id:"",name:"Unknown Course",owner_id:null,service:null,settings:"",term:"Unknown term",url:"",visibility:null})}}n.components.register("course",{viewModel:Y,template:'\n    <div>Course: <span data-bind="text: name"></span></div>\n'});class H extends b{constructor(e){super(e),this.FIELDS=new o({date_modified:"dateModified",date_created:"dateCreated",comment:"comment",location:"location",generic:"generic",tag_id:"tagId",score:"score",submission_id:"submissionId",author_id:"authorId",assignment_version:"assignmentVersion",submission_version:"submissionVersion",version:"version",forked_id:"forkedId",forked_version:"forkedVersion"}),this.koFromJson(e)}}class Z extends S{constructor(){super(...arguments),this.GET_FIELD="submissions"}getPayload(){return{submission_ids:this.getDelayedIds().join(","),course_id:this.courseId}}getUrl(){return"submission/get_ids"}makeEmptyInstance(e){return new H({assignment_version:0,author_id:0,comment:"",forked_id:null,forked_version:null,generic:!1,location:"",score:0,submission_id:null,submission_version:0,tag_id:null,version:0,id:e,date_created:null,date_modified:null})}getLocalStorageKey(){return`BLOCKPY_COURSE_${this.courseId}_REVIEWS`}}class z{constructor(e,t,s){this.courseId=e,this.userStore=new w(e,t.userIds,s.users),this.courseStore=new W(e,t.courseIds,s.courses),this.assignmentStore=new k(e,t.assignmentIds,s.assignments),this.assignmentGroupStore=new I(e,t.assignmentGroupIds,s.assignmentGroups),this.reviewStore=new Z(e,t.reviewIds,s.reviews),this.submissionStore=new V(e,t.submissionIds,s.submissions)}}n.components.register("course-list",{viewModel:class{constructor(e){this.server=e.server,this.courses=e.courses,this.user=e.user,console.log("TEST")}getRole(e){let t=this.user.roles();for(let s=0;s<t.length;s+=1){let n=t[s];if(n.courseId()===e)return n.name()}return"No Role"}},template:'\n<ul class="list-unstyled">\n\x3c!-- ko foreach: courses --\x3e\n    <li class="media mt-2 border-bottom">\n        <a data-bind="attr: {href: id}" class="btn btn-primary mr-3">\n            <span class="fas fa-eye"></span> Open\n        </a>\n        <div class="media-body">\n            <div class="d-flex w-100 justify-content-between">\n                <h5 class="mb-1" data-bind="text: name"></h5>\n                <small class="text-muted" data-bind="text: prettyDateCreated"></small>\n            </div>\n            <p class="mb-1">\n                Role: <span data-bind="text: $parent.getRole(id)" class="text-capitalize"></span><br>\n                <p data-bind="text: term"></p>\n            </p>\n            <small class="text-muted" data-bind="if: url">\n                Course URL: <span data-bind="text: url"></span>,\n            </small>\n            <small class="text-muted" data-bind="if: service()!==\'native\'">\n                LMS: <span data-bind="text: service"></span>,\n            </small>\n            <small class="text-muted">\n                Course ID: <span data-bind="text: id"></span>\n            </small>\n        </div>\n    </li>\n\x3c!-- /ko --\x3e\n</ul>\n'})}},t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}return s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(460)})();
//# sourceMappingURL=frontend.js.map