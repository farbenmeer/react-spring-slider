(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41),__webpack_require__(135),__webpack_require__(117),__webpack_require__(417),__webpack_require__(32),__webpack_require__(36),__webpack_require__(18),__webpack_require__(106),__webpack_require__(42),__webpack_require__(39),__webpack_require__(46),__webpack_require__(9),__webpack_require__(122),__webpack_require__(418),__webpack_require__(13),__webpack_require__(12);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(48),react_spring__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(283),react_use_gesture__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(443),_components_arrow__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(213),_components_bullet__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(214),_components_bullets__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(215),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(19);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledSliderArrows=styled_components__WEBPACK_IMPORTED_MODULE_17__.a.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n\ttop: 50%;\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),StyledBulletList=styled_components__WEBPACK_IMPORTED_MODULE_17__.a.ul(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 15px 0;\n"]))),StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_17__.a.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlider=styled_components__WEBPACK_IMPORTED_MODULE_17__.a.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 100%;\n"]))),StyledSlide=styled_components__WEBPACK_IMPORTED_MODULE_17__.a.div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 100%;\n\twill-change: transform;\n\tuser-select: none;\n"]))),Slider=function Slider(_ref){var _ref$activeIndex=_ref.activeIndex,activeIndex=void 0===_ref$activeIndex?0:_ref$activeIndex,_ref$ArrowComponent=_ref.ArrowComponent,ArrowComponent=void 0===_ref$ArrowComponent?_components_arrow__WEBPACK_IMPORTED_MODULE_20__.a:_ref$ArrowComponent,_ref$arrowStyle=_ref.arrowStyle,arrowStyle=void 0===_ref$arrowStyle?{}:_ref$arrowStyle,_ref$auto=_ref.auto,auto=void 0===_ref$auto?0:_ref$auto,_ref$BulletComponent=_ref.BulletComponent,BulletComponent=void 0===_ref$BulletComponent?_components_bullet__WEBPACK_IMPORTED_MODULE_21__.a:_ref$BulletComponent,_ref$BulletsComponent=_ref.BulletsComponent,BulletsComponent=void 0===_ref$BulletsComponent?_components_bullets__WEBPACK_IMPORTED_MODULE_22__.a:_ref$BulletsComponent,_ref$bulletStyle=_ref.bulletStyle,bulletStyle=void 0===_ref$bulletStyle?{}:_ref$bulletStyle,_ref$children=_ref.children,children=void 0===_ref$children?[]:_ref$children,_ref$hasArrows=_ref.hasArrows,hasArrows=void 0!==_ref$hasArrows&&_ref$hasArrows,_ref$hasBullets=_ref.hasBullets,hasBullets=void 0!==_ref$hasBullets&&_ref$hasBullets,_ref$onSlideChange=_ref.onSlideChange,onSlideChange=void 0===_ref$onSlideChange?function(){}:_ref$onSlideChange,_ref$setSlideCustom=_ref.setSlideCustom,setSlideCustom=void 0===_ref$setSlideCustom?void 0:_ref$setSlideCustom,_ref$slidesAtOnce=_ref.slidesAtOnce,slidesAtOnce=void 0===_ref$slidesAtOnce?1:_ref$slidesAtOnce,_ref$slidesToSlide=_ref.slidesToSlide,slidesToSlide=void 0===_ref$slidesToSlide?1:_ref$slidesToSlide,sliderRef=Object(react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_16__.useState)(0),2),slide=_useState2[0],setSlideOriginal=_useState2[1],setSlide=setSlideCustom?function(index){return setSlideOriginal(setSlideCustom(index))}:setSlideOriginal,_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_16__.useState)(!1),2),isDragging=_useState4[0],setDragging=_useState4[1],_useSprings2=_slicedToArray(Object(react_spring__WEBPACK_IMPORTED_MODULE_18__.useSprings)(children.length,(function(index){return{offset:index}})),2),springProps=_useSprings2[0],springPropsRef=_useSprings2[1],gestureBinds=Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_19__.a)({onDrag:function onDrag(_ref2){var down=_ref2.down,xDelta=_slicedToArray(_ref2.movement,1)[0],xDir=_slicedToArray(_ref2.direction,1)[0],distance=_ref2.distance,cancel=_ref2.cancel,first=_ref2.first,active=_ref2.active;if(first&&setDragging(!0),sliderRef&&sliderRef.current&&sliderRef.current.parentElement){var width=sliderRef.current.parentElement.getBoundingClientRect().width;down&&distance>width/2&&(cancel&&cancel(),active&&setSlide(function clamp(input,lower,upper){return Math.min(Math.max(input,lower),upper)}(slide+(xDir>0?-1:1),0,children.length-slidesAtOnce))),springPropsRef.update((function(index){return{offset:(active&&down?xDelta:0)/width+(index-slide)}})).start()}},onClick:function onClick(){isDragging?setDragging(!1):clickOnSlide(slide)}},{drag:{delay:200}});Object(react__WEBPACK_IMPORTED_MODULE_16__.useEffect)((function(){springPropsRef.update((function(index){return{offset:index-slide}})).start(),onSlideChange(slide)}),[slide,springPropsRef,onSlideChange]),Object(react__WEBPACK_IMPORTED_MODULE_16__.useEffect)((function(){var interval;return auto>0&&(interval=setInterval((function(){var targetIndex=(slide+1)%children.length;setSlide(targetIndex)}),auto)),function(){interval&&clearInterval(interval)}}),[auto,children.length,slide]),Object(react__WEBPACK_IMPORTED_MODULE_16__.useEffect)((function(){setSlide(activeIndex%children.length)}),[activeIndex,children.length]);var childs=children.map((function(child,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(StyledSlide,{children:child},index)})),clickOnSlide=function clickOnSlide(slideIndex){childs[slideIndex].props.children.props.onClick&&childs[slideIndex].props.children.props.onClick()},goToFirstSlide=function goToFirstSlide(){setSlide(0)},goToLastSlide=function goToLastSlide(){setSlide(children.length-slidesAtOnce)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(StyledWrapper,{ref:sliderRef,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(StyledSlider,{children:[hasArrows&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(StyledSliderArrows,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(ArrowComponent,{style:arrowStyle,direction:"left",onClick:function previousSlide(){0!==slide?slide-slidesToSlide<=0?goToFirstSlide():setSlide(slide-slidesToSlide):goToLastSlide()}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(ArrowComponent,{style:arrowStyle,direction:"right",onClick:function nextSlide(){var reachedLastSlide=slide===children.length-slidesAtOnce,nextSlideExists=slide+(slidesAtOnce-1)+slidesToSlide<children.length-1;reachedLastSlide?goToFirstSlide():nextSlideExists?setSlide(slide+slidesToSlide):goToLastSlide()}})]}),hasBullets&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(BulletsComponent,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(StyledBulletList,{children:function bullets(){for(var arr=[],_loop=function _loop(index){arr.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(BulletComponent,{isActive:index===slide,onClick:function onClick(){return setSlide(index)},style:bulletStyle},index))},index=0;index<=children.length-slidesAtOnce;index++)_loop(index);return arr}()})}),springProps.map((function(_ref3,index){var offset=_ref3.offset;return Object(react__WEBPACK_IMPORTED_MODULE_16__.createElement)(react_spring__WEBPACK_IMPORTED_MODULE_18__.animated.div,Object.assign({},gestureBinds(),{key:index,className:"slider__slide",style:{transform:offset.to((function(offsetX){return"translate3d(".concat(100*offsetX,"%, 0, 0)")})),position:"absolute",width:"".concat(100/slidesAtOnce,"%"),height:"100%",willChange:"transform",touchAction:"none"}}),childs[index])}))]})})};Slider.displayName="Slider",__webpack_exports__.a=Slider;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number | undefined"}},ArrowComponent:{defaultValue:null,description:"",name:"ArrowComponent",required:!1,type:{name:"ArrowComponentType | undefined"}},arrowStyle:{defaultValue:{value:"{}"},description:"",name:"arrowStyle",required:!1,type:{name:"ArrowStyle | undefined"}},auto:{defaultValue:{value:"0"},description:"",name:"auto",required:!1,type:{name:"number | undefined"}},BulletComponent:{defaultValue:null,description:"",name:"BulletComponent",required:!1,type:{name:"BulletComponentType | undefined"}},BulletsComponent:{defaultValue:null,description:"",name:"BulletsComponent",required:!1,type:{name:"BulletsComponentType | undefined"}},bulletStyle:{defaultValue:{value:"{}"},description:"",name:"bulletStyle",required:!1,type:{name:"BulletStyle | undefined"}},hasArrows:{defaultValue:{value:"false"},description:"",name:"hasArrows",required:!1,type:{name:"boolean | undefined"}},hasBullets:{defaultValue:{value:"false"},description:"",name:"hasBullets",required:!1,type:{name:"boolean | undefined"}},onSlideChange:{defaultValue:{value:"() => undefined"},description:"",name:"onSlideChange",required:!1,type:{name:"((slide: number) => void) | undefined"}},setSlideCustom:{defaultValue:{value:"undefined"},description:"",name:"setSlideCustom",required:!1,type:{name:"((slide: number) => number) | undefined"}},slidesAtOnce:{defaultValue:{value:"1"},description:"",name:"slidesAtOnce",required:!1,type:{name:"number | undefined"}},slidesToSlide:{defaultValue:{value:"1"},description:"",name:"slidesToSlide",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},213:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41),__webpack_require__(135),__webpack_require__(117),__webpack_require__(0);var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(48),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19);var StyledI=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.i(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tborder: solid #333;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 3px;\n\theight: 20px;\n\twidth: 20px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.4;\n\t}\n\n\ttransform: ",";\n\n\t","\n"])),(function(_ref){return"left"===_ref.direction?"rotate(135deg)":"rotate(-45deg)"}),(function(_ref2){return"left"===_ref2.direction?"margin-left: 1em;":"margin-right: 1em;"})),Arrow=function Arrow(_ref3){var style=_ref3.style,onClick=_ref3.onClick,direction=_ref3.direction,_ref3$className=_ref3.className,className=void 0===_ref3$className?"":_ref3$className;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",{onClick:onClick,className:className,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledI,{style:style,direction:direction})})};Arrow.displayName="Arrow",__webpack_exports__.a=Arrow;try{arrow.displayName="arrow",arrow.__docgenInfo={description:"",displayName:"arrow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ArrowStyle | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/arrow.tsx#arrow"]={docgenInfo:arrow.__docgenInfo,name:"arrow",path:"src/components/arrow.tsx#arrow"})}catch(__react_docgen_typescript_loader_error){}},214:function(module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject;__webpack_require__(41),__webpack_require__(135),__webpack_require__(117);var Bullet=__webpack_require__(48).a.li(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15px;\n\tbackground-color: #333;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 2px;\n\n\t",";\n"])),(function(_ref){return _ref.isActive?"opacity: 0.5":""}));__webpack_exports__.a=Bullet;try{bullet.displayName="bullet",bullet.__docgenInfo={description:"",displayName:"bullet",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/bullet.tsx#bullet"]={docgenInfo:bullet.__docgenInfo,name:"bullet",path:"src/components/bullet.tsx#bullet"})}catch(__react_docgen_typescript_loader_error){}},215:function(module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject;__webpack_require__(41),__webpack_require__(135),__webpack_require__(117);var Bullets=__webpack_require__(48).a.div(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\tz-index: 1;\n"])));__webpack_exports__.a=Bullets;try{bullets.displayName="bullets",bullets.__docgenInfo={description:"",displayName:"bullets",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/bullets.tsx#bullets"]={docgenInfo:bullets.__docgenInfo,name:"bullets",path:"src/components/bullets.tsx#bullets"})}catch(__react_docgen_typescript_loader_error){}},465:function(module,exports,__webpack_require__){__webpack_require__(466),__webpack_require__(620),__webpack_require__(621),__webpack_require__(827),__webpack_require__(828),__webpack_require__(829),__webpack_require__(830),__webpack_require__(831),module.exports=__webpack_require__(819)},533:function(module,exports){},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(336)},819:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(336).configure)([__webpack_require__(820)],module,!1)}).call(this,__webpack_require__(190)(module))},820:function(module,exports,__webpack_require__){var map={"./arrows.stories.tsx":821,"./bullets.stories.tsx":825,"./index.stories.tsx":826};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=820},821:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"CustomArrows",(function(){return CustomArrows})),__webpack_require__.d(__webpack_exports__,"CustomArrowComponent",(function(){return CustomArrowComponent})),__webpack_require__.d(__webpack_exports__,"ModufiedCustomArrows",(function(){return ModufiedCustomArrows}));__webpack_require__(13),__webpack_require__(12),__webpack_require__(279),__webpack_require__(41),__webpack_require__(135),__webpack_require__(117),__webpack_require__(0);var _templateObject,_src_components_arrow__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(213),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(48),___WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(101),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(19);var images=["https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],imageStyle=function imageStyle(src){return{backgroundSize:"cover",backgroundImage:"url(".concat(src,")"),height:"100%",width:"100%"}};__webpack_exports__.default={component:___WEBPACK_IMPORTED_MODULE_9__.a,title:"Arrows",decorators:[function(Story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Story,{})})}]};var Story=function Story(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(___WEBPACK_IMPORTED_MODULE_9__.a,Object.assign({},args,{children:images.map((function(image){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{draggable:"false",style:imageStyle(image),onClick:function onClick(){return console.log("click")}},image)}))}))};Story.displayName="Story";var Default=Story.bind({});Default.args={hasArrows:!0};var CustomArrows=Story.bind({});CustomArrows.storyName="With custom arrow style",CustomArrows.args={hasArrows:!0,arrowStyle:{border:"solid red",borderWidth:"0 5px 5px 0"}};var ArrowComponent=function ArrowComponent(_ref){var onClick=_ref.onClick,direction=_ref.direction;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{style:{border:"1px solid black",padding:"1em",backgroundColor:"white"},onClick:onClick,children:direction})};ArrowComponent.displayName="ArrowComponent";var CustomArrowComponent=Story.bind({});CustomArrowComponent.storyName="With custom arrow component",CustomArrowComponent.args={hasArrows:!0,ArrowComponent:ArrowComponent};var ModufiedCustomArrows=Story.bind({}),ModifiedBulletComponent=Object(styled_components__WEBPACK_IMPORTED_MODULE_8__.a)(_src_components_arrow__WEBPACK_IMPORTED_MODULE_7__.a)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\ti {\n\t\tborder-color: lightgreen;\n\t\tbackground-color: black;\n\t}\n"])));ModufiedCustomArrows.storyName="modified 'arrows' component",ModufiedCustomArrows.args={hasArrows:!0,ArrowComponent:ModifiedBulletComponent},Default.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},Default.parameters),CustomArrows.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomArrows.parameters),CustomArrowComponent.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomArrowComponent.parameters),ModufiedCustomArrows.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},ModufiedCustomArrows.parameters)},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"DifferentBullets",(function(){return DifferentBullets})),__webpack_require__.d(__webpack_exports__,"CustomBullets",(function(){return CustomBullets})),__webpack_require__.d(__webpack_exports__,"ModufiedCustomBullet",(function(){return ModufiedCustomBullet})),__webpack_require__.d(__webpack_exports__,"ModufiedCustomBullets",(function(){return ModufiedCustomBullets}));__webpack_require__(13),__webpack_require__(12),__webpack_require__(279),__webpack_require__(41),__webpack_require__(135),__webpack_require__(117),__webpack_require__(0);var _templateObject,_templateObject2,_src_components_bullet__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(214),_src_components_bullets__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(215),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(48),___WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(101),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(19);function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var images=["https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],imageStyle=function imageStyle(src){return{backgroundSize:"cover",backgroundImage:"url(".concat(src,")"),height:"100%",width:"100%"}};__webpack_exports__.default={component:___WEBPACK_IMPORTED_MODULE_10__.a,title:"Bullets",decorators:[function(Story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Story,{})})}]};var Story=function Story(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(___WEBPACK_IMPORTED_MODULE_10__.a,Object.assign({},args,{children:images.map((function(image){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{draggable:"false",style:imageStyle(image),onClick:function onClick(){return console.log("click")}},image)}))}))};Story.displayName="Story";var Default=Story.bind({});Default.args={hasBullets:!0};var DifferentBullets=Story.bind({});DifferentBullets.storyName="Different 'bulletStyle'",DifferentBullets.args={hasBullets:!0,bulletStyle:{backgroundColor:"#fff"}};var BulletComponent=function BulletComponent(_ref){var onClick=_ref.onClick,isActive=_ref.isActive;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li",{style:{width:"25px",height:"25px",backgroundColor:"red",margin:"0 2px",opacity:isActive?"0.5":void 0},onClick:onClick})};BulletComponent.displayName="BulletComponent";var CustomBullets=Story.bind({});CustomBullets.storyName="Custom 'bullets'",CustomBullets.args={hasBullets:!0,BulletComponent:BulletComponent};var ModufiedCustomBullet=Story.bind({}),ModifiedBulletComponent=Object(styled_components__WEBPACK_IMPORTED_MODULE_9__.a)(_src_components_bullet__WEBPACK_IMPORTED_MODULE_7__.a)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n\tbackground-color: green;\n"])));ModufiedCustomBullet.storyName="modified 'bullet' component",ModufiedCustomBullet.args={hasBullets:!0,BulletComponent:ModifiedBulletComponent};var ModufiedCustomBullets=Story.bind({}),ModifiedBulletsComponent=Object(styled_components__WEBPACK_IMPORTED_MODULE_9__.a)(_src_components_bullets__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n\tbackground-color: green;\n"])));ModufiedCustomBullets.storyName="modified 'bullets' component",ModufiedCustomBullets.args={hasBullets:!0,BulletsComponent:ModifiedBulletsComponent},Default.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},Default.parameters),DifferentBullets.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},DifferentBullets.parameters),CustomBullets.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},CustomBullets.parameters),ModufiedCustomBullet.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},ModufiedCustomBullet.parameters),ModufiedCustomBullets.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},ModufiedCustomBullets.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"AutoSliding",(function(){return AutoSliding})),__webpack_require__.d(__webpack_exports__,"ActiveIndex",(function(){return ActiveIndex})),__webpack_require__.d(__webpack_exports__,"ActiveIndexInterval",(function(){return ActiveIndexInterval})),__webpack_require__.d(__webpack_exports__,"CustomSetSlide",(function(){return CustomSetSlide})),__webpack_require__.d(__webpack_exports__,"SlidesAtOnceComponent",(function(){return SlidesAtOnceComponent})),__webpack_require__.d(__webpack_exports__,"SlidesToSlideComponent",(function(){return SlidesToSlideComponent}));__webpack_require__(13),__webpack_require__(12),__webpack_require__(279),__webpack_require__(418),__webpack_require__(417),__webpack_require__(32),__webpack_require__(36),__webpack_require__(18),__webpack_require__(106),__webpack_require__(42),__webpack_require__(39),__webpack_require__(46),__webpack_require__(41),__webpack_require__(9),__webpack_require__(122);var react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(0),___WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(101),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(19);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var images=["https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],imageStyle=function imageStyle(src){return{backgroundSize:"cover",backgroundImage:"url(".concat(src,")"),height:"100%",width:"100%"}};__webpack_exports__.default={component:___WEBPACK_IMPORTED_MODULE_16__.a,title:"Other",decorators:[function(Story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story,{})})}]};var Story=function Story(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_16__.a,Object.assign({},args,{children:images.map((function(image){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{draggable:"false",style:imageStyle(image),onClick:function onClick(){return console.log("click")}},image)}))}))};Story.displayName="Story";var Default=Story.bind({});Default.args={hasBullets:!0,hasArrows:!1,onSlideChange:function onSlideChange(index){console.log("Slide changed to: ".concat(index))}};var AutoSliding=Story.bind({});AutoSliding.storyName="With auto sliding",AutoSliding.args={hasBullets:!0,hasArrows:!1,auto:2e3};var ActiveIndex=Story.bind({});ActiveIndex.storyName="With activeIndex (2)",ActiveIndex.args={hasBullets:!0,hasArrows:!1,activeIndex:2};var IntervalStory=function IntervalStory(args){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)(2),2),activeIndex=_useState2[0],setActiveIndex=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_15__.useEffect)((function(){var id=setInterval((function(){var index=activeIndex+1%images.length;setActiveIndex(index)}),2e3);return function(){clearInterval(id)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story,Object.assign({},args,{activeIndex:activeIndex}))};IntervalStory.displayName="IntervalStory";var ActiveIndexInterval=IntervalStory.bind({});ActiveIndexInterval.storyName="With activeIndex (interval)",ActiveIndexInterval.args={hasBullets:!0,hasArrows:!1};var CustomSetSlideStory=function CustomSetSlideStory(args){var activeIndex=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)(0),1)[0];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story,Object.assign({},args,{activeIndex:activeIndex,setSlideCustom:function setSlideCustom(){return 1}}))};CustomSetSlideStory.displayName="CustomSetSlideStory";var CustomSetSlide=CustomSetSlideStory.bind({});CustomSetSlide.storyName="With custom setSlide function",CustomSetSlide.args={hasBullets:!0,hasArrows:!1};var SlidesAtOnceComponent=Story.bind({});SlidesAtOnceComponent.storyName="With slidesAtOnce 2",SlidesAtOnceComponent.args={hasArrows:!0,slidesAtOnce:2};var SlidesToSlideComponent=Story.bind({});SlidesToSlideComponent.storyName="With slidesToSlide 2",SlidesToSlideComponent.args={hasArrows:!0,slidesAtOnce:2,slidesToSlide:2},Default.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},Default.parameters),AutoSliding.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},AutoSliding.parameters),ActiveIndex.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},ActiveIndex.parameters),ActiveIndexInterval.parameters=Object.assign({storySource:{source:"(args: SliderProps) => {\n\tconst [activeIndex, setActiveIndex] = useState(2);\n\n\tuseEffect(() => {\n\t\tconst id = setInterval(() => {\n\t\t\tconst index = activeIndex + (1 % images.length);\n\t\t\tsetActiveIndex(index);\n\t\t}, 2000);\n\n\t\treturn () => {\n\t\t\tclearInterval(id);\n\t\t};\n\t});\n\n\treturn <Story {...args} activeIndex={activeIndex} />;\n}"}},ActiveIndexInterval.parameters),CustomSetSlide.parameters=Object.assign({storySource:{source:"(args: SliderProps) => {\n\tconst [activeIndex] = useState(0);\n\n\tconst setSlideCustom = () => 1;\n\n\treturn (\n\t\t<Story\n\t\t\t{...args}\n\t\t\tactiveIndex={activeIndex}\n\t\t\tsetSlideCustom={setSlideCustom}\n\t\t/>\n\t);\n}"}},CustomSetSlide.parameters),SlidesAtOnceComponent.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},SlidesAtOnceComponent.parameters),SlidesToSlideComponent.parameters=Object.assign({storySource:{source:'(args: SliderProps) => (\n\t<Slider {...args}>\n\t\t{images.map((image) => (\n\t\t\t<div\n\t\t\t\tkey={image}\n\t\t\t\tdraggable="false"\n\t\t\t\tstyle={imageStyle(image)}\n\t\t\t\tonClick={() => console.log("click")}\n\t\t\t/>\n\t\t))}\n\t</Slider>\n)'}},SlidesToSlideComponent.parameters)},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(32),__webpack_require__(50),__webpack_require__(816),__webpack_require__(43),__webpack_require__(44),__webpack_require__(817),__webpack_require__(117),__webpack_require__(818);var client_api=__webpack_require__(836),esm=__webpack_require__(6),parameters={layout:"padded"};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[465,2,3]]]);