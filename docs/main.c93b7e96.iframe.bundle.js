(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{460:function(module,exports,__webpack_require__){__webpack_require__(461),__webpack_require__(615),__webpack_require__(616),__webpack_require__(820),__webpack_require__(821),__webpack_require__(822),__webpack_require__(824),__webpack_require__(825),module.exports=__webpack_require__(814)},528:function(module,exports){},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(331)},814:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(331).configure)([__webpack_require__(815)],module,!1)}).call(this,__webpack_require__(187)(module))},815:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":823};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=815},823:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"AutoSliding",(function(){return AutoSliding})),__webpack_require__.d(__webpack_exports__,"ActiveIndex",(function(){return ActiveIndex})),__webpack_require__.d(__webpack_exports__,"ActiveIndexInterval",(function(){return ActiveIndexInterval})),__webpack_require__.d(__webpack_exports__,"CustomSetSlide",(function(){return CustomSetSlide})),__webpack_require__.d(__webpack_exports__,"DifferentBullets",(function(){return DifferentBullets})),__webpack_require__.d(__webpack_exports__,"CustomBullets",(function(){return CustomBullets})),__webpack_require__.d(__webpack_exports__,"CustomArrows",(function(){return CustomArrows})),__webpack_require__.d(__webpack_exports__,"CustomArrowComponent",(function(){return CustomArrowComponent})),__webpack_require__.d(__webpack_exports__,"SlidesAtOnceComponent",(function(){return SlidesAtOnceComponent}));__webpack_require__(13),__webpack_require__(12),__webpack_require__(816),__webpack_require__(412),__webpack_require__(413),__webpack_require__(32),__webpack_require__(36),__webpack_require__(18),__webpack_require__(105),__webpack_require__(41),__webpack_require__(39),__webpack_require__(45),__webpack_require__(52),__webpack_require__(9),__webpack_require__(120);var _templateObject,react=__webpack_require__(0),styled_components_browser_esm=(__webpack_require__(274),__webpack_require__(193),__webpack_require__(75)),web=__webpack_require__(277),reactusegesture_esm=__webpack_require__(438),jsx_runtime=__webpack_require__(25);var StyledI=styled_components_browser_esm.a.i(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\ttransform: ",";\n\n\t","\n"])),(function(_ref){return"left"===_ref.direction?"rotate(135deg)":"rotate(-45deg)"}),(function(_ref2){return"left"===_ref2.direction?"margin-left: 1em;":"margin-right: 1em;"})),arrow_Arrow=function Arrow(_ref3){var ArrowComponent=_ref3.ArrowComponent,arrowStyle=_ref3.arrowStyle,onClick=_ref3.onClick,direction=_ref3.direction;return ArrowComponent?Object(jsx_runtime.jsx)(ArrowComponent,{direction:direction,onClick:onClick}):Object(jsx_runtime.jsx)("a",{onClick:onClick,children:Object(jsx_runtime.jsx)(StyledI,{style:arrowStyle,direction:direction})})};arrow_Arrow.displayName="Arrow",arrow_Arrow.defaultProps={ArrowComponent:void 0,arrowStyle:{}};var bullet_templateObject,arrow_arrow=arrow_Arrow;try{arrow.displayName="arrow",arrow.__docgenInfo={description:"",displayName:"arrow",props:{ArrowComponent:{defaultValue:{value:"undefined"},description:"",name:"ArrowComponent",required:!1,type:{name:"ArrowComponentType | undefined"}},arrowStyle:{defaultValue:{value:"{}"},description:"",name:"arrowStyle",required:!1,type:{name:"ArrowStyle | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/arrow/arrow.tsx#arrow"]={docgenInfo:arrow.__docgenInfo,name:"arrow",path:"src/components/arrow/arrow.tsx#arrow"})}catch(__react_docgen_typescript_loader_error){}var StyledBullet=styled_components_browser_esm.a.li(bullet_templateObject||(bullet_templateObject=function bullet_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"])),(function(_ref){return _ref.active?"opacity: 0.5":""})),bullet_Bullet=function Bullet(_ref2){var index=_ref2.index,BulletComponent=_ref2.BulletComponent,setSlide=_ref2.setSlide,activeIndex=_ref2.activeIndex,bulletStyle=_ref2.bulletStyle,updateSlide=function updateSlide(){setSlide(index)};return BulletComponent?Object(jsx_runtime.jsx)(BulletComponent,{isActive:index===activeIndex,onClick:updateSlide},index):Object(jsx_runtime.jsx)(StyledBullet,{active:index===activeIndex,style:bulletStyle,onClick:updateSlide},index)};bullet_Bullet.displayName="Bullet",bullet_Bullet.defaultProps={BulletComponent:void 0,bulletStyle:{}};var src_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,bullet_bullet=bullet_Bullet;try{bullet.displayName="bullet",bullet.__docgenInfo={description:"",displayName:"bullet",props:{BulletComponent:{defaultValue:{value:"undefined"},description:"",name:"BulletComponent",required:!1,type:{name:"BulletComponentType | undefined"}},bulletStyle:{defaultValue:{value:"{}"},description:"",name:"bulletStyle",required:!1,type:{name:"BulletStyle | undefined"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},setSlide:{defaultValue:null,description:"",name:"setSlide",required:!0,type:{name:"(index: number) => void"}},activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/bullet/bullet.tsx#bullet"]={docgenInfo:bullet.__docgenInfo,name:"bullet",path:"src/components/bullet/bullet.tsx#bullet"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function src_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledSliderArrows=styled_components_browser_esm.a.div(src_templateObject||(src_templateObject=src_taggedTemplateLiteral(["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),StyledBulletList=styled_components_browser_esm.a.ul(_templateObject2||(_templateObject2=src_taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 15px 0;\n"]))),StyledBullets=styled_components_browser_esm.a.div(_templateObject3||(_templateObject3=src_taggedTemplateLiteral(["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"]))),StyledWrapper=styled_components_browser_esm.a.div(_templateObject4||(_templateObject4=src_taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlider=styled_components_browser_esm.a.div(_templateObject5||(_templateObject5=src_taggedTemplateLiteral(["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlide=styled_components_browser_esm.a.div(_templateObject6||(_templateObject6=src_taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n"]))),src_Slider=function Slider(_ref){var _ref$activeIndex=_ref.activeIndex,activeIndex=void 0===_ref$activeIndex?0:_ref$activeIndex,ArrowComponent=_ref.ArrowComponent,_ref$arrowStyle=_ref.arrowStyle,arrowStyle=void 0===_ref$arrowStyle?{}:_ref$arrowStyle,_ref$auto=_ref.auto,auto=void 0===_ref$auto?0:_ref$auto,BulletComponent=_ref.BulletComponent,_ref$bulletStyle=_ref.bulletStyle,bulletStyle=void 0===_ref$bulletStyle?{}:_ref$bulletStyle,_ref$children=_ref.children,children=void 0===_ref$children?[]:_ref$children,_ref$hasArrows=_ref.hasArrows,hasArrows=void 0!==_ref$hasArrows&&_ref$hasArrows,_ref$hasBullets=_ref.hasBullets,hasBullets=void 0!==_ref$hasBullets&&_ref$hasBullets,_ref$onSlideChange=_ref.onSlideChange,onSlideChange=void 0===_ref$onSlideChange?function(){}:_ref$onSlideChange,_ref$setSlideCustom=_ref.setSlideCustom,setSlideCustom=void 0===_ref$setSlideCustom?void 0:_ref$setSlideCustom,_ref$slidesAtOnce=_ref.slidesAtOnce,slidesAtOnce=void 0===_ref$slidesAtOnce?1:_ref$slidesAtOnce,sliderRef=Object(react.useRef)(null),_useState2=_slicedToArray(Object(react.useState)(0),2),slide=_useState2[0],setSlideOriginal=_useState2[1],setSlide=setSlideCustom?function(index){return setSlideOriginal(setSlideCustom(index))}:setSlideOriginal,_useState4=_slicedToArray(Object(react.useState)(!1),2),isDragging=_useState4[0],setDragging=_useState4[1],_useSprings2=_slicedToArray(Object(web.useSprings)(children.length,(function(index){return{offset:index}})),2),springProps=_useSprings2[0],springPropsRef=_useSprings2[1],gestureBinds=Object(reactusegesture_esm.a)({onDrag:function onDrag(_ref2){var down=_ref2.down,xDelta=_slicedToArray(_ref2.movement,1)[0],xDir=_slicedToArray(_ref2.direction,1)[0],distance=_ref2.distance,cancel=_ref2.cancel,first=_ref2.first,active=_ref2.active;if(first&&setDragging(!0),sliderRef&&sliderRef.current&&sliderRef.current.parentElement){var width=sliderRef.current.parentElement.getBoundingClientRect().width;down&&distance>width/2&&(cancel&&cancel(),active&&setSlide(function clamp(input,lower,upper){return Math.min(Math.max(input,lower),upper)}(slide+(xDir>0?-1:1),0,children.length-slidesAtOnce))),springPropsRef.update((function(index){return{offset:(active&&down?xDelta:0)/width+(index-slide)}})).start()}},onClick:function onClick(){isDragging?setDragging(!1):clickOnSlide(slide)}},{drag:{delay:200}});Object(react.useEffect)((function(){springPropsRef.update((function(index){return{offset:index-slide}})).start(),onSlideChange(slide)}),[slide,springPropsRef,onSlideChange]),Object(react.useEffect)((function(){var interval;return auto>0&&(interval=setInterval((function(){var targetIndex=(slide+1)%children.length;setSlide(targetIndex)}),auto)),function(){interval&&clearInterval(interval)}}),[auto,children.length,slide]),Object(react.useEffect)((function(){setSlide(activeIndex%children.length)}),[activeIndex,children.length]);var childs=children.map((function(child,index){return Object(jsx_runtime.jsx)(StyledSlide,{children:child},index)})),clickOnSlide=function clickOnSlide(slideIndex){childs[slideIndex].props.children.props.onClick&&childs[slideIndex].props.children.props.onClick()};return Object(jsx_runtime.jsx)(StyledWrapper,{ref:sliderRef,children:Object(jsx_runtime.jsxs)(StyledSlider,{children:[hasArrows&&Object(jsx_runtime.jsxs)(StyledSliderArrows,{children:[Object(jsx_runtime.jsx)(arrow_arrow,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"left",onClick:function previousSlide(){setSlide(0!==slide?slide-1:children.length-slidesAtOnce)}}),Object(jsx_runtime.jsx)(arrow_arrow,{ArrowComponent:ArrowComponent,arrowStyle:arrowStyle,direction:"right",onClick:function nextSlide(){slide!==children.length-slidesAtOnce?setSlide(slide+1):setSlide(0)}})]}),hasBullets&&Object(jsx_runtime.jsx)(StyledBullets,{children:Object(jsx_runtime.jsx)(StyledBulletList,{children:function bullets(){for(var arr=[],index=0;index<=children.length-slidesAtOnce;index++)arr.push(Object(jsx_runtime.jsx)(bullet_bullet,{index:index,BulletComponent:BulletComponent,setSlide:setSlide,activeIndex:slide,bulletStyle:bulletStyle},index));return arr}()})}),springProps.map((function(_ref3,index){var offset=_ref3.offset;return Object(react.createElement)(web.animated.div,Object.assign({},gestureBinds(),{key:index,className:"slider__slide",style:{transform:offset.interpolate((function(offsetX){return"translate3d(".concat(100*offsetX,"%, 0, 0)")})),position:"absolute",width:"".concat(100/slidesAtOnce,"%"),height:"100%",willChange:"transform"}}),childs[index])}))]})})};src_Slider.displayName="Slider";var src_0=src_Slider;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number | undefined"}},ArrowComponent:{defaultValue:null,description:"",name:"ArrowComponent",required:!1,type:{name:"ArrowComponentType | undefined"}},arrowStyle:{defaultValue:{value:"{}"},description:"",name:"arrowStyle",required:!1,type:{name:"ArrowStyle | undefined"}},auto:{defaultValue:{value:"0"},description:"",name:"auto",required:!1,type:{name:"number | undefined"}},BulletComponent:{defaultValue:null,description:"",name:"BulletComponent",required:!1,type:{name:"BulletComponentType | undefined"}},bulletStyle:{defaultValue:{value:"{}"},description:"",name:"bulletStyle",required:!1,type:{name:"BulletStyle | undefined"}},hasArrows:{defaultValue:{value:"false"},description:"",name:"hasArrows",required:!1,type:{name:"boolean | undefined"}},hasBullets:{defaultValue:{value:"false"},description:"",name:"hasBullets",required:!1,type:{name:"boolean | undefined"}},onSlideChange:{defaultValue:{value:"() => undefined"},description:"",name:"onSlideChange",required:!1,type:{name:"((slide: number) => void) | undefined"}},setSlideCustom:{defaultValue:{value:"undefined"},description:"",name:"setSlideCustom",required:!1,type:{name:"((slide: number) => number) | undefined"}},slidesAtOnce:{defaultValue:{value:"1"},description:"",name:"slidesAtOnce",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var index_stories_images=["https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],imageStyle=function imageStyle(src){return{backgroundSize:"cover",backgroundImage:"url(".concat(src,")"),height:"100%",width:"100%"}},index_stories_Story=(__webpack_exports__.default={component:src_0,title:"Slider",decorators:[function(Story){return Object(jsx_runtime.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(jsx_runtime.jsx)(Story,{})})}]},function Story(args){return Object(jsx_runtime.jsx)(src_0,Object.assign({},args,{children:index_stories_images.map((function(image){return Object(jsx_runtime.jsx)("div",{draggable:"false",style:imageStyle(image),onClick:function onClick(){return console.log("click")}},image)}))}))});index_stories_Story.displayName="Story";var Default=index_stories_Story.bind({});Default.args={hasBullets:!0,hasArrows:!1,onSlideChange:function onSlideChange(index){console.log("Slide changed to: ".concat(index))}};var AutoSliding=index_stories_Story.bind({});AutoSliding.storyName="With auto sliding",AutoSliding.args={hasBullets:!0,hasArrows:!1,auto:2e3};var ActiveIndex=index_stories_Story.bind({});ActiveIndex.storyName="With activeIndex (2)",ActiveIndex.args={hasBullets:!0,hasArrows:!1,activeIndex:2};var index_stories_IntervalStory=function IntervalStory(args){var _useState2=index_stories_slicedToArray(Object(react.useState)(2),2),activeIndex=_useState2[0],setActiveIndex=_useState2[1];return Object(react.useEffect)((function(){var id=setInterval((function(){var index=activeIndex+1%index_stories_images.length;setActiveIndex(index)}),2e3);return function(){clearInterval(id)}})),Object(jsx_runtime.jsx)(index_stories_Story,Object.assign({},args,{activeIndex:activeIndex}))};index_stories_IntervalStory.displayName="IntervalStory";var ActiveIndexInterval=index_stories_IntervalStory.bind({});ActiveIndexInterval.storyName="With activeIndex (interval)",ActiveIndexInterval.args={hasBullets:!0,hasArrows:!1};var index_stories_CustomSetSlideStory=function CustomSetSlideStory(args){var _useState4=index_stories_slicedToArray(Object(react.useState)(0),2),activeIndex=_useState4[0];_useState4[1];return Object(jsx_runtime.jsx)(index_stories_Story,Object.assign({},args,{activeIndex:activeIndex,setSlideCustom:function setSlideCustom(_slide){return 1}}))};index_stories_CustomSetSlideStory.displayName="CustomSetSlideStory";var CustomSetSlide=index_stories_CustomSetSlideStory.bind({});CustomSetSlide.storyName="With custom setSlide function",CustomSetSlide.args={hasBullets:!0,hasArrows:!1};var DifferentBullets=index_stories_Story.bind({});DifferentBullets.storyName="With different 'bulletStyle'",DifferentBullets.args={hasBullets:!0,hasArrows:!1,bulletStyle:{backgroundColor:"#fff"}};var index_stories_BulletComponent=function BulletComponent(_ref){var onClick=_ref.onClick,isActive=_ref.isActive;return Object(jsx_runtime.jsx)("li",{style:{width:"25px",height:"25px",backgroundColor:"red",margin:"0 2px",opacity:isActive?"0.5":void 0},onClick:onClick})};index_stories_BulletComponent.displayName="BulletComponent";var CustomBullets=index_stories_Story.bind({});CustomBullets.storyName="With custom 'bullets'",CustomBullets.args={hasBullets:!0,hasArrows:!1,BulletComponent:index_stories_BulletComponent};var CustomArrows=index_stories_Story.bind({});CustomArrows.storyName="With custom arrow style",CustomArrows.args={hasBullets:!1,hasArrows:!0,arrowStyle:{border:"solid red",borderWidth:"0 5px 5px 0"}};var index_stories_ArrowComponent=function ArrowComponent(_ref2){var onClick=_ref2.onClick,direction=_ref2.direction;return Object(jsx_runtime.jsx)("div",{style:{border:"1px solid black",padding:"1em",backgroundColor:"white"},onClick:onClick,children:direction})};index_stories_ArrowComponent.displayName="ArrowComponent";var CustomArrowComponent=index_stories_Story.bind({});CustomArrowComponent.storyName="With custom arrow component",CustomArrowComponent.args={hasBullets:!1,hasArrows:!0,ArrowComponent:index_stories_ArrowComponent};var SlidesAtOnceComponent=index_stories_Story.bind({});SlidesAtOnceComponent.storyName="With slidesAtOnce 2",SlidesAtOnceComponent.args={hasArrows:!0,slidesAtOnce:2},Default.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},Default.parameters),AutoSliding.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},AutoSliding.parameters),ActiveIndex.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},ActiveIndex.parameters),ActiveIndexInterval.parameters=Object.assign({storySource:{source:"(args: SliderProps) => {\n\tconst [activeIndex, setActiveIndex] = useState(2);\n\n\tuseEffect(() => {\n\t\tconst id = setInterval(() => {\n\t\t\tconst index = activeIndex + (1 % images.length);\n\t\t\tsetActiveIndex(index);\n\t\t}, 2000);\n\n\t\treturn () => {\n\t\t\tclearInterval(id);\n\t\t};\n\t});\n\n\treturn <Story {...args} activeIndex={activeIndex} />;\n}"}},ActiveIndexInterval.parameters),CustomSetSlide.parameters=Object.assign({storySource:{source:"(args: SliderProps) => {\n\tconst [activeIndex, setActiveIndex] = useState(0);\n\n\tconst setSlideCustom = (_slide: number) => 1;\n\n\treturn (\n\t\t<Story\n\t\t\t{...args}\n\t\t\tactiveIndex={activeIndex}\n\t\t\tsetSlideCustom={setSlideCustom}\n\t\t/>\n\t);\n}"}},CustomSetSlide.parameters),DifferentBullets.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},DifferentBullets.parameters),CustomBullets.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomBullets.parameters),CustomArrows.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomArrows.parameters),CustomArrowComponent.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomArrowComponent.parameters),SlidesAtOnceComponent.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},SlidesAtOnceComponent.parameters)},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(32),__webpack_require__(48),__webpack_require__(811),__webpack_require__(42),__webpack_require__(43),__webpack_require__(812),__webpack_require__(193),__webpack_require__(813);var client_api=__webpack_require__(830),esm=__webpack_require__(6),parameters={layout:"padded"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[460,2,3]]]);