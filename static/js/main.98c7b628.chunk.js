(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a(14),i=a.n(n),r=a(3),d=(a(22),a(15)),o=a.n(d),u=(a(41),function(e){return Object(c.jsxs)("h1",{className:"location-details",children:[e.city,", ",e.country]})}),l=a(16),j=a.n(l),m=a(4),p=a.n(m),h=(a(52),function(e){var t=e.date,a=e.temperature,s=e.description,n=e.icon,i=e.onSelect;return Object(c.jsxs)("div",{className:"forecast-summary",children:[Object(c.jsx)("span",{className:"date","data-testid":"date-id",children:p()(t).format("ddd Do MMM")}),Object(c.jsxs)("span",{className:"temperature","data-testid":"temperature-id",children:[a,"\xb0c"]}),Object(c.jsx)("span",{className:"description","data-testid":"description-id",children:s}),Object(c.jsx)("span",{className:"icon","data-testid":"icon-id",children:Object(c.jsx)(j.a,{name:"owm",iconId:n,"data-testid":"weather-icon-id"})}),Object(c.jsx)("button",{className:"details-button",onClick:function(){return i(t)},children:"More Details"})]})}),b=(a(53),function(e){return Object(c.jsx)("div",{className:"forecast-summaries",children:e.forecasts.map((function(t){return Object(c.jsx)(h,{date:t.date,description:t.description,icon:t.icon,temperature:t.temperature.max,onSelect:e.onForecastSelect},t.date)}))})}),f=(a(54),function(e){var t=e.forecast;return Object(c.jsxs)("div",{className:"forecast-details",children:[Object(c.jsx)("span",{className:"date","data-testid":"date-id",children:p()(t.date).format("ddd Do MMM")}),Object(c.jsxs)("span",{className:"min-temperature","data-testid":"min-temperature-id",children:["Min temp: ",t.temperature.min,"\xb0c"]}),Object(c.jsxs)("span",{className:"max-temperature","data-testid":"max-temperature-id",children:["Max temp: ",t.temperature.max,"\xb0c"]}),Object(c.jsxs)("span",{className:"humidity","data-testid":"humidity-id",children:["Humidity: ",t.humidity,"%"]}),Object(c.jsxs)("span",{className:"wind-speed","data-testid":"wind-speed-id",children:["Wind speed: ",t.wind.speed,"mph"]}),Object(c.jsxs)("span",{className:"wind-direction","data-testid":"wind-direction-id",children:["Wind direction: ",t.wind.direction.toUpperCase()]})]})}),O=(a(55),function(e){var t=Object(s.useState)(""),a=Object(r.a)(t,2),n=a[0],i=a[1],d=e.handleSearchText,o=e.errorMessage;return Object(c.jsxs)("div",{className:"search-form",children:[Object(c.jsxs)("div",{id:"search-input-wrapper",children:[Object(c.jsx)("input",{className:"search-input",id:"location-search-input",type:"text",placeholder:"Find a city",value:n,onChange:function(e){!function(e){i(e.target.value)}(e)},onKeyUp:function(e){"Enter"===e.key&&d(n)}}),Object(c.jsx)("button",{className:"search-button",onClick:function(){return d(n)},children:Object(c.jsx)("i",{className:"fa fa-search"})})]}),o&&Object(c.jsx)("div",{className:"error-message",children:o})]})}),x=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)({city:"Edinburgh",country:""}),d=Object(r.a)(i,2),l=d[0],j=d[1],m=Object(s.useState)(0),p=Object(r.a)(m,2),h=p[0],x=p[1],y=Object(s.useState)(""),N=Object(r.a)(y,2),v=N[0],w=N[1],g=function(e){o.a.get("https://mcr-codes-weather.herokuapp.com/forecast?city=".concat(e)).then((function(e){200===e.status&&(j(e.data.location),n(e.data.forecasts),w(""),document.getElementById("location-search-input").value="")})).catch((function(t){404===t.response.status?w("Sorry, ".concat(e," isn't available. Please choose another city.")):500===t.response.status&&w("Oops! Something went wrong. Please try again later."),document.getElementById("location-search-input").value=""}))};Object(s.useEffect)((function(){g(l.city)}),[l.city]);var S=a.find((function(e){return e.date===h}));return Object(c.jsxs)("div",{className:"forecast",children:[Object(c.jsxs)("div",{className:"location-details-wrapper",children:[Object(c.jsx)(u,{city:l.city,country:l.country}),Object(c.jsx)(O,{handleSearchText:function(e){g(e)},errorMessage:v})]}),Object(c.jsx)(b,{forecasts:a,onForecastSelect:function(e){x(e)}}),S&&Object(c.jsx)(f,{forecast:S})]})};a(56);i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.98c7b628.chunk.js.map