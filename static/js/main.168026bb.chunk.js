(this["webpackJsonprotten-tomatillos"]=this["webpackJsonprotten-tomatillos"]||[]).push([[0],{33:function(e,t,r){},34:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(1),n=r(26),s=r.n(n),o=(r(33),r(11)),c=r(12),l=r(14),u=r(13),d=(r(34),r(7)),h=function(e){return Object(a.jsx)(d.b,{to:"/movie/".concat(e.id),children:Object(a.jsxs)("section",{"data-testid":"moviecard-element-".concat(e.id),className:"movie-card",children:[Object(a.jsx)("img",{className:"homepage-img",src:e.posterPath,alt:e.title}),Object(a.jsx)("h3",{className:"movie-card-title",children:e.title})]})})},m=(r(40),function(e){var t=[];function r(e){return Object(a.jsx)(h,{title:e.title,posterPath:e.poster_path,id:e.id},e.id)}return t=e.filteredMovies?e.filteredMovies.map((function(e){return r(e)})):e.moviesInfo.map((function(e){return r(e)})),Object(a.jsxs)("section",{"data-testid":"movies-element",children:[Object(a.jsx)("h2",{className:"section-heading",children:"Other Top Movies"}),Object(a.jsx)("div",{className:"movies-list",children:t})]})}),j=(r(41),function(e){return Object(a.jsxs)("nav",{"data-testid":"navbar-element",className:"navbar",children:[Object(a.jsx)("h1",{className:"site-title",children:"Rancid Tomatillos"}),Object(a.jsxs)("form",{className:"search-wrapper",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("label",{"data-testid":"search-label",className:"label-title",htmlFor:"search"}),Object(a.jsx)("input",{className:"input-box",id:"search",type:"search",name:"search",placeholder:"search a title...",onChange:e.handleChangeFunction,autoComplete:"off","aria-label":"Search through site content"})]})]})}),v=(r(42),r.p+"static/media/tomato.6b1264e0.png"),p=function(e){var t=e.errorMessage;return Object(a.jsxs)("section",{"data-testid":"error-page-element",className:"error-page app",children:[Object(a.jsx)("img",{className:"error-tomato",src:v,alt:"tomato"}),Object(a.jsxs)("h1",{className:"error-header",children:["Oops! ",t]}),Object(a.jsx)("h3",{className:"error-text",children:"Something went wrong. Our servers need some time to ketchup!"})]})},b=(r(43),r(15)),f=r.n(b),O=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).componentDidMount=function(){var t=e.props.movieId;e.updateMovieObjectState(t),e.updateMovieTrailerState(t)},e.findTrailerKey=function(e){var t=e.videos.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site}));return t?t.key:""},e.state={movieObject:null,movieTrailer:""},e}return Object(c.a)(r,[{key:"updateMovieTrailerState",value:function(e){var t=this;this.props.getMovieVideoData(e).then((function(e){return t.setState({movieTrailer:t.findTrailerKey(e)})})).catch((function(e){return t.setState({error:e})}))}},{key:"updateMovieObjectState",value:function(e){var t=this;this.props.getSingleMovieData(e).then((function(e){return t.setState({movieObject:e.movie})})).catch((function(e){return t.setState({error:e})}))}},{key:"switchNumToCurrency",value:function(e){return"$"+e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}},{key:"render",value:function(){if(!this.state.movieObject)return Object(a.jsx)("h3",{className:"error-message app",children:"We apologize, we couldn't find a match for this movie ID"});var e=this.state.movieObject,t=e.backdrop_path,r=e.poster_path,i=e.title,n=e.release_date,s=e.overview,o=e.genres,c=e.budget,l=e.revenue,u=e.tagline,h=e.average_rating,m=e.runtime;return Object(a.jsx)("section",{"data-testid":"movie-preview-page",className:"movie-preview-page ",style:{backgroundImage:"url(".concat(t,")")},children:Object(a.jsxs)("div",{className:"preview-wrapper",children:[Object(a.jsxs)("div",{className:"description-wrapper",children:[Object(a.jsx)("img",{className:"movie-preview-img",src:r,alt:i}),Object(a.jsxs)("div",{className:"movie-description",children:[Object(a.jsx)("h3",{className:"movie-preview-title",children:i}),Object(a.jsx)("p",{className:"movie-info-detail",children:u}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Rating: ",h.toFixed(1)]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Release Date: ",n]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Runtime: ",m," minutes"]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Budget: ",this.switchNumToCurrency(c)]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Revenue: ",this.switchNumToCurrency(l)]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Genre: ",o.join(", ")]}),Object(a.jsxs)("p",{className:"movie-info-detail",children:["Overview: ",s]})]}),Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("button",{"data-testid":"closing-button-element",className:"movie-preview-button",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABYklEQVR4Ae3XIWzCQBiG4YmKikq8mg8+OHwqEMjJyfNBICqQ+CCRFQi8QiAQlRMIBKISOVHx7xUTyyWXL/l3NRtv8jhCvpTrJbw8+y9N0eCAM27fTmixwitGrUTAHQZIH3hDgazVuMKcOsyQpQaWwYB3uCvQwjLbwtUGNgrHk1rCRjRgBtJV6MUBNU1+tkMB2Rrq99/ChKDPIVeCqMQDFsMRRHpUiF6OLnlPiebid1+oUQj4WYAliRt9B3OM8o0BVkh2gflGOcYALZLdYZ5RrjHACclMi0eJMdrNMUi8TeKgC3ck691j/KPOSNY5xwQsnKMOSLZ3jRFXgtAgWe0bA/+oKZJV+NSPNh4jR3XyQDsPZIjH6FHq+3QTPMQhNAUDjrCEK0roKMBGVkOn37gsGu//sBMssxbuysxPaoMCvy6Ig670WCJrE2yje0p5YI0Ko1Whxh4d+uiiu2CHOUo8+9t9AUcCWfVf/Xv1AAAAAElFTkSuQmCC",alt:"close preview button"})})})]})," ",this.state.movieTrailer&&Object(a.jsxs)("div",{className:"movie-preview-trailer-section",children:[Object(a.jsx)("h3",{className:"trailer-header",children:"".concat(i," Trailer:")}),Object(a.jsx)(f.a,{"data-testid":"player-box",className:"preview-react-player",url:"https:www.https://www.youtube.com/watch?v=".concat(this.state.movieTrailer),controls:!0,config:{youtube:{playerVars:{modestbranding:1}}}})]})]})})}}]),r}(i.Component),x=r(9),g=r.n(x),M=r(16),N=function(){var e=Object(M.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");case 2:if(t=e.sent,!(parseInt(t.status)>499)){e.next=5;break}return e.abrupt("return",Object(a.jsx)(p,{}));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(M.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(M.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(t,"/videos"));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=r(2),C=(r(52),function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).componentDidMount=function(){e.props.trailerInfo.id&&e.fetchMovieVideos()},e.componentDidUpdate=function(t){e.props.trailerInfo!==t.trailerInfo&&e.fetchMovieVideos()},e.fetchMovieVideos=function(){y(e.props.trailerInfo.id).then((function(t){return e.setState({movieTrailer:e.findTrailerKey(t)})}))},e.findTrailerKey=function(e){var t=e.videos.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site}));return t?t.key:"2Gg6Seob5Mg"},e.state={movieTrailer:""},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props.trailerInfo,t=e.title,r=e.release_date,i=e.genres,n=e.runtime;return Object(a.jsx)("section",{children:this.state.movieTrailer&&Object(a.jsxs)("div",{className:"player-wrapper","data-testid":"player-wrapper",children:[Object(a.jsx)(f.a,{"data-testid":"".concat(this.state.movieTrailer),className:"react-player",url:"https:www.https://www.youtube.com/watch?v=".concat(this.state.movieTrailer),width:"100%",height:"100%",controls:!1,muted:!0,playing:!0,loop:!0,config:{youtube:{playerVars:{disablekb:1,fs:0,iv_load_policy:3,playlist:"".concat(this.state.movieTrailer),modestbranding:1}}}}),Object(a.jsx)(d.b,{to:"/movie/".concat(this.props.trailerInfo.id),children:Object(a.jsx)("section",{className:"player-cover"})}),Object(a.jsxs)("section",{className:"trailer-info",children:[Object(a.jsx)("h2",{className:"trailer-movie-title","data-testid":"trailer-movie-title",children:t}),Object(a.jsxs)("p",{className:"trailer-details",children:["Released ",r]}),Object(a.jsx)("p",{className:"trailer-details",children:i.join(", ")}),Object(a.jsxs)("p",{className:"trailer-details",children:[n," minutes"]})]})]})})}}]),r}(i.Component)),A=(r(53),function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).componentDidMount=function(){N().then((function(e){return a.updateMovieDisplays(e.movies)})).catch((function(e){return a.setState({error:e})}))},a.handleChange=function(e){e.preventDefault(),a.setState({search:e.target.value});var t=[];t=""!==e.target.value?a.state.homePageMovies.filter((function(t){var r=t.title.toLowerCase(),a=e.target.value.toLowerCase();return r.includes(a)})):a.state.homePageMovies,a.setState({moviesToDisplay:t})},a.updateMovieDisplays=function(e){a.setState({homePageMovies:e});var t=Math.floor(Math.random()*e.length);a.updateTrailerMovie(t)},a.state={homePageMovies:[],moviesToDisplay:null,trailerMovie:{},error:""},a}return Object(c.a)(r,[{key:"handleError",value:function(){var e=this;return Object(a.jsx)(T.a,{render:function(){return Object(a.jsx)(p,{errorMessage:e.state.error})}})}},{key:"updateTrailerMovie",value:function(e){var t=this;w(this.state.homePageMovies[e].id).then((function(e){return t.setState({trailerMovie:e.movie})}))}},{key:"render",value:function(){var e=this;return void 0===this.state.homePageMovies?Object(a.jsx)("main",{className:"app",children:Object(a.jsx)(p,{errorMessage:this.state.error})}):Object(a.jsxs)("main",{className:"app",children:[Object(a.jsx)(j,{handleChangeFunction:this.handleChange}),this.state.error&&Object(a.jsx)(p,{errorMessage:this.state.error}),!this.state.homePageMovies.length&&Object(a.jsx)("h2",{className:"error-page",children:" ...Loading Movies..."}),Object(a.jsxs)(T.c,{children:[Object(a.jsx)(T.a,{exact:!0,path:"/movie/:id",render:function(e){var t=e.match;return Object(a.jsx)(O,{movieId:t.params.id,getSingleMovieData:w,getMovieVideoData:y})}}),Object(a.jsx)(T.a,{exact:!0,path:"/",render:function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)(C,{trailerInfo:e.state.trailerMovie}),Object(a.jsx)(m,{moviesInfo:e.state.homePageMovies,filteredMovies:e.state.moviesToDisplay})]})}}),Object(a.jsx)(T.a,{render:function(){return Object(a.jsx)(p,{errorMessage:e.state.error})}})]})]})}}]),r}(i.Component)),k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,55)).then((function(t){var r=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(a.jsx)(d.a,{basename:"/rotten-tomatillos",children:Object(a.jsx)(A,{})}),document.getElementById("root")),k()}},[[54,1,2]]]);
//# sourceMappingURL=main.168026bb.chunk.js.map