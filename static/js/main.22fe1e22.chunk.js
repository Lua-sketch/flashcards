(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{21:function(a,t,e){},36:function(a,t,e){},42:function(a,t,e){},43:function(a,t,e){},47:function(a,t,e){"use strict";e.r(t);var n=e(2),c=e(29),r=e.n(c),s=e(16),i=e(4),d=(e(36),e(1));var o=Object(i.f)((function(a){return Object(d.jsx)("div",{className:"navigation",children:Object(d.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Flashcards"}),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item  ".concat("/"===a.location.pathname?"active":""),children:Object(d.jsxs)(s.b,{className:"nav-link",to:"/",children:["In\xedcio",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/trigonometria"===a.location.pathname?"active":""),children:Object(d.jsx)(s.b,{className:"nav-link",to:"/trigonometria",children:"Trigonometria"})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/n\xfameros_complexos"===a.location.pathname?"active":""),children:Object(d.jsx)(s.b,{className:"nav-link",to:"/n\xfameros_complexos",children:"N\xfameros Complexos"})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/\xe1lgebra_linear"===a.location.pathname?"active":""),children:Object(d.jsx)(s.b,{className:"nav-link",to:"/\xe1lgebra_linear",children:"\xc1lgebra Linear"})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/comp_cl\xe1ssica_python"===a.location.pathname?"active":""),children:Object(d.jsx)(s.b,{className:"nav-link",to:"/comp_cl\xe1ssica_python",children:"Computa\xe7\xe3o Cl\xe1ssica e Python"})})]})})]})})})}));var l=function(){return Object(d.jsx)("div",{style:{background_color:"white"},children:Object(d.jsx)("p",{children:"Escolha o t\xf3pico que deseja revisar acima!"})})},p=e(11),u=e(12),j=e(9),h=e(14),b=e(13),m=(e(42),function(a){return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"front",children:Object(d.jsx)("div",{className:"prompt",children:a.p})}),Object(d.jsx)("div",{className:"back",children:Object(d.jsx)("div",{className:"answer",children:a.a})})]})})}),v=(e(21),e(43),function(a){Object(h.a)(e,a);var t=Object(b.a)(e);function e(a){var n;return Object(p.a)(this,e),(n=t.call(this,a)).drawCard=n.drawCard.bind(Object(j.a)(n)),n}return Object(u.a)(e,[{key:"drawCard",value:function(){this.props.drawCard()}},{key:"render",value:function(a){return Object(d.jsx)("div",{className:"buttonContainer",children:Object(d.jsx)("button",{className:"btn",onClick:this.drawCard,children:"Pr\xf3ximo"})})}}]),e}(n.Component)),O=e(6),x=(e(22),{apiKey:"AIzaSyDpyILKixJ4uKWtXERipByrkRr0enHBhTM",authDomain:"flashcards-31735.firebaseapp.com",projectId:"flashcards-31735",storageBucket:"flashcards-31735.appspot.com",messagingSenderId:"901277020159",appId:"1:901277020159:web:df3d040e18f303afd901ca",measurementId:"G-B9H545EPHS"}),C=function(a){Object(h.a)(e,a);var t=Object(b.a)(e);function e(a){var n;return Object(p.a)(this,e),n=t.call(this,a),O.a.apps.length?n.app=O.a.app():n.app=O.a.initializeApp(x),n.database=n.app.database().ref().child("trigonometria"),n.updateCard=n.updateCard.bind(Object(j.a)(n)),n.state={cards:[],currentCard:{}},n}return Object(u.a)(e,[{key:"componentWillMount",value:function(){var a=this,t=this.state.cards;this.database.on("child_added",(function(e){t.push({id:e.key,p:e.val().p,a:e.val().a}),a.setState({cards:t,currentCard:a.getRandomCard(t)})}))}},{key:"getRandomCard",value:function(a){return a[Math.floor(Math.random()*a.length)]}},{key:"updateCard",value:function(){var a=this.state.cards;this.setState({currentCard:this.getRandomCard(a)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"cardRow",children:Object(d.jsx)(m,{p:this.state.currentCard.p,a:this.state.currentCard.a})}),Object(d.jsx)("div",{className:"buttonRow",children:Object(d.jsx)(v,{drawCard:this.updateCard})})]})}}]),e}(n.Component),f=function(a){Object(h.a)(e,a);var t=Object(b.a)(e);function e(a){var n;return Object(p.a)(this,e),n=t.call(this,a),O.a.apps.length?n.app=O.a.app():n.app=O.a.initializeApp(x),n.database=n.app.database().ref().child("n\xfameros_complexos"),n.updateCard=n.updateCard.bind(Object(j.a)(n)),n.state={cards:[],currentCard:{}},n}return Object(u.a)(e,[{key:"componentWillMount",value:function(){var a=this,t=this.state.cards;this.database.on("child_added",(function(e){t.push({id:e.key,p:e.val().p,a:e.val().a}),a.setState({cards:t,currentCard:a.getRandomCard(t)})}))}},{key:"getRandomCard",value:function(a){return a[Math.floor(Math.random()*a.length)]}},{key:"updateCard",value:function(){var a=this.state.cards;this.setState({currentCard:this.getRandomCard(a)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"cardRow",children:Object(d.jsx)(m,{p:this.state.currentCard.p,a:this.state.currentCard.a})}),Object(d.jsx)("div",{className:"buttonRow",children:Object(d.jsx)(v,{drawCard:this.updateCard})})]})}}]),e}(n.Component),N=function(a){Object(h.a)(e,a);var t=Object(b.a)(e);function e(a){var n;return Object(p.a)(this,e),n=t.call(this,a),O.a.apps.length?n.app=O.a.app():n.app=O.a.initializeApp(x),n.database=n.app.database().ref().child("\xe1lgebra_linear"),n.updateCard=n.updateCard.bind(Object(j.a)(n)),n.state={cards:[],currentCard:{}},n}return Object(u.a)(e,[{key:"componentWillMount",value:function(){var a=this,t=this.state.cards;this.database.on("child_added",(function(e){t.push({id:e.key,p:e.val().p,a:e.val().a}),a.setState({cards:t,currentCard:a.getRandomCard(t)})}))}},{key:"getRandomCard",value:function(a){return a[Math.floor(Math.random()*a.length)]}},{key:"updateCard",value:function(){var a=this.state.cards;this.setState({currentCard:this.getRandomCard(a)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"cardRow",children:Object(d.jsx)(m,{p:this.state.currentCard.p,a:this.state.currentCard.a})}),Object(d.jsx)("div",{className:"buttonRow",children:Object(d.jsx)(v,{drawCard:this.updateCard})})]})}}]),e}(n.Component),g=function(a){Object(h.a)(e,a);var t=Object(b.a)(e);function e(a){var n;return Object(p.a)(this,e),n=t.call(this,a),O.a.apps.length?n.app=O.a.app():n.app=O.a.initializeApp(x),n.database=n.app.database().ref().child("comp_cl\xe1ssica_python"),n.updateCard=n.updateCard.bind(Object(j.a)(n)),n.state={cards:[],currentCard:{}},n}return Object(u.a)(e,[{key:"componentWillMount",value:function(){var a=this,t=this.state.cards;this.database.on("child_added",(function(e){t.push({id:e.key,p:e.val().p,a:e.val().a}),a.setState({cards:t,currentCard:a.getRandomCard(t)})}))}},{key:"getRandomCard",value:function(a){return a[Math.floor(Math.random()*a.length)]}},{key:"updateCard",value:function(){var a=this.state.cards;this.setState({currentCard:this.getRandomCard(a)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"cardRow",children:Object(d.jsx)(m,{p:this.state.currentCard.p,a:this.state.currentCard.a})}),Object(d.jsx)("div",{className:"buttonRow",children:Object(d.jsx)(v,{drawCard:this.updateCard})})]})}}]),e}(n.Component);var k=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,component:function(){return Object(d.jsx)(l,{})}}),Object(d.jsx)(i.a,{path:"/trigonometria",exact:!0,component:function(){return Object(d.jsx)(C,{})}}),Object(d.jsx)(i.a,{path:"/n\xfameros_complexos",exact:!0,component:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(i.a,{path:"/\xe1lgebra_linear",exact:!0,component:function(){return Object(d.jsx)(N,{})}}),Object(d.jsx)(i.a,{path:"/comp_cl\xe1ssica_python",exact:!0,component:function(){return Object(d.jsx)(g,{})}})]})]})})};r.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.22fe1e22.chunk.js.map