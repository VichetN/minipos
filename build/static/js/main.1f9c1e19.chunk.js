(this.webpackJsonpsaleapp=this.webpackJsonpsaleapp||[]).push([[0],{188:function(e,t,n){},190:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(29),s=n.n(i),a=(n(188),n(189),n(190),n(170)),d=n(26),l=n(34),j=n(54),o=n(28),b=n.n(o),u=n(45),x=n(23),O=n(293),h=n(294),p=n(177),m=n(296),v=n(89),f=n(53),y=n(32),g=n(295),k=n(292),I=n(297),w=n(298),A=n(299);function F(e){return"$"+e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var C=n(4);y.a.Group;function S(e){var t=e.handleRemoveOrder,n=(e.handlePlusQty,e.handleMinusQty,e.handleEditQty);return[{title:"N\xb0",dataIndex:"no",key:"no",width:50,render:function(e,t,n){return Object(C.jsx)(I.b,{size:"middle",children:n+=1})}},{title:"Item",dataIndex:"name",key:"name",width:150},{title:"Quantity",dataIndex:"qty",key:"qty",width:100,render:function(e,t){return Object(C.jsx)(I.b,{size:"middle",children:Object(C.jsx)(g.a,{type:"number",min:0,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{newValue:e.target.value}))},value:t.qty})})}},{title:"Price",dataIndex:"price",key:"price",width:100},{title:"Amount",dataIndex:"amount",key:"amount",width:150,render:function(e,t){return Object(C.jsx)(I.b,{size:"middle",children:F(t.qty*t.price)})}},{key:"action",dataIndex:"action",fixed:"right",width:50,align:"center",render:function(e,n){return Object(C.jsx)(I.b,{size:"middle",children:Object(C.jsx)(w.a,{title:"Do you want to remove this item?",onConfirm:function(){return t(n._id)},okText:"Yes",cancelText:"No",style:{cursor:"pointer"},children:Object(C.jsx)(y.a,{className:"link",style:{color:"red"},children:Object(C.jsx)(A.a,{})})})})}}]}n.p;var P=4e3,E=n(300);function N(e){var t,n=e.item,c=e.handleClick;return Object(C.jsx)(f.a,{xs:24,md:6,style:{padding:10},children:Object(C.jsxs)(y.a,{style:{width:"100%",height:"100%"},onClick:function(){return c(n)},children:[Object(C.jsxs)("div",{style:{position:"relative"},children:[Object(C.jsx)(E.a,{style:{fontSize:100,color:"#CCCCCC"}}),Object(C.jsxs)("div",{className:"price-tag",children:[Object(C.jsxs)("span",{style:{fontSize:14},children:[n.price*P,"\u17db"]}),Object(C.jsx)("br",{}),F(n.price)]})]}),Object(C.jsx)("span",{style:{textAlign:"center"},children:null===(t=n.name)||void 0===t?void 0:t.toUpperCase()})]})})}var T=n(304),q=n(98),z=q.a.Option;function D(e){var t=e.open,c=e.setOpen,r=e.setSuccess,i=n(92),s=h.a.useForm(),a=Object(x.a)(s,1)[0],d=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("/api/product",t);case 3:r(!0),c(!1),a.resetFields(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p.b.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(m.a,{title:"CREATE NEW PRODUCT",visible:t,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},footer:null,children:Object(C.jsx)(h.a,{form:a,name:"addProduct",onFinish:function(e){d(e)},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{xs:24,md:{span:11},children:Object(C.jsx)(h.a.Item,{name:"name",rules:[{required:!0,message:"Fields is required!"}],children:Object(C.jsx)(g.a,{placeholder:"name"})})}),Object(C.jsx)(f.a,{xs:24,md:{span:11,offset:2},children:Object(C.jsx)(h.a.Item,{name:"category",rules:[{required:!0,message:"Fields is required!"}],children:Object(C.jsxs)(q.a,{placeholder:"category",style:{width:"100%"},children:[Object(C.jsx)(z,{value:"VEGETABLE",children:"VEGETABLE"}),Object(C.jsx)(z,{value:"MEAT",children:"MEAT"})]})})}),Object(C.jsx)(f.a,{xs:24,md:{span:11,offset:0},children:Object(C.jsx)(h.a.Item,{name:"inStock",rules:[{required:!0,message:"Fields is required!"}],children:Object(C.jsx)(g.a,{type:"number",min:0,placeholder:"in stock",style:{width:"100%"}})})}),Object(C.jsx)(f.a,{xs:24,md:{span:11,offset:2},children:Object(C.jsx)(h.a.Item,{name:"price",rules:[{required:!0,message:"Fields is required!"}],children:Object(C.jsx)(g.a,{type:"number",min:0,placeholder:"price"})})}),Object(C.jsx)(f.a,{xs:24,md:{span:11,offset:0},children:Object(C.jsx)(h.a.Item,{name:"remark",children:Object(C.jsx)(g.a,{placeholder:"remark"})})}),Object(C.jsx)(f.a,{xs:24,children:Object(C.jsx)(y.a,{htmlType:"submit",type:"primary",style:{width:"100%"},children:"CREATE"})})]})})})}y.a.Group;function _(){var e=n(92),t=Object(c.useState)([]),r=Object(x.a)(t,2),i=r[0],s=r[1],a=Object(c.useState)(!1),d=Object(x.a)(a,2),l=(d[0],d[1],Object(c.useState)(!1)),j=Object(x.a)(l,2),o=(j[0],j[1],Object(c.useState)({})),O=Object(x.a)(o,2),h=(O[0],O[1],function(){var t=Object(u.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.get("api/dashboard/salelist");case 3:n=t.sent,c=n.data,console.log(c),s(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),p.b.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}());return Object(c.useEffect)((function(){h()}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(k.a,{columns:[{title:"N\xb0",dataIndex:"no",key:"no",width:50,render:function(e,t,n){return Object(C.jsx)(I.b,{size:"middle",children:n+=1})}},{title:"Product",dataIndex:"_id",key:"_id",width:150},{title:"Total QTY",dataIndex:"totalQty",key:"totalQty",width:100},{title:"Total Sale",dataIndex:"totalSaleAmount",key:"totalSaleAmount",width:150,render:function(e,t){return Object(C.jsxs)("span",{size:"middle",children:["USD: ",F(null===t||void 0===t?void 0:t.totalSaleAmount),", KHRIEL: ",(null===t||void 0===t?void 0:t.totalSaleAmount)*P," \u17db"]})}},{key:"action",dataIndex:"action",fixed:"right",width:50,align:"center"}],dataSource:i,pagination:!1})})}var M=n(301),R=n(302),Y=n(303),L=n(122),Q=n.n(L);y.a.Group;function B(e){var t=e.handleEdit,n=e.handleDeliver,c=e.handlePrintInvoice;return[{title:"N\xb0",dataIndex:"no",key:"no",width:50,render:function(e,t,n){return Object(C.jsx)(I.b,{size:"middle",children:n+=1})}},{title:"#Invoice",dataIndex:"invoiceID",key:"invoiceID",width:150},{title:"Date",dataIndex:"createdAt",key:"createdAt",width:150,render:function(e,t,n){return Object(C.jsx)(I.b,{size:"middle",children:Q()(t.createdAt).format("DD-MMM-YYYY hh:mm:ss a")})}},{title:"Product",dataIndex:"product",key:"product",width:100,render:function(e,t,n){var c;return Object(C.jsx)(I.b,{size:"middle",children:null===t||void 0===t||null===(c=t.orderItems)||void 0===c?void 0:c.length})}},{title:"Discount",dataIndex:"discount",key:"discount",width:150},{title:"Tax",dataIndex:"taxPrice",key:"taxPrice",width:150},{title:"Total Price",dataIndex:"totalPrice",key:"totalPrice",width:100,render:function(e,t,n){return Object(C.jsx)(I.b,{size:"middle",children:F(null===t||void 0===t?void 0:t.totalPrice)})}},{title:"Payment",dataIndex:"isPaid",key:"isPaid",width:100,render:function(e,t,n){var c=Object(C.jsx)("span",{className:"status-pending",children:"Pending"});return!0===(null===t||void 0===t?void 0:t.isDelivered)&&(c=Object(C.jsx)("span",{className:"status-delivered",children:"Delivered"})),!0===(null===t||void 0===t?void 0:t.isPaid)&&(c=Object(C.jsx)("span",{className:"status-paid",children:"Paid"})),Object(C.jsx)(I.b,{size:"middle",style:{width:"100%"},children:c})}},{key:"action",dataIndex:"action",fixed:"right",width:50,align:"center",render:function(e,r){return Object(C.jsxs)(I.b,{size:"middle",children:[Object(C.jsx)(w.a,{title:"Are you sure to confirm delivery?",onConfirm:function(){return n(r)},okText:"Yes",cancelText:"No",style:{cursor:"pointer"},children:Object(C.jsx)(y.a,{className:"link",style:{color:"#1d39c4"},children:Object(C.jsx)(M.a,{})})}),Object(C.jsx)(y.a,{className:"link",style:{color:"#ad8b00"},onClick:function(){return t(r)},children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(y.a,{className:"link",onClick:function(){return c(r)},children:Object(C.jsx)(Y.a,{})})]})}}]}var V=n(100),U=q.a.Option;function G(e){var t=e.open,c=e.setOpen,r=e.setSuccess,i=e.data;console.log(i);var s=n(92),a=h.a.useForm(),d=Object(x.a)(a,1)[0],l=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.put("/api/order/".concat(null===i||void 0===i?void 0:i._id,"/pay"),t);case 3:r(!0),c(!1),d.resetFields(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(m.a,{title:"INVOICE",visible:t,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},footer:null,children:Object(C.jsx)(h.a,{form:d,name:"EditInvoice",onFinish:function(e){l(e)},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{xs:24,md:{span:24,offset:0},children:Object(C.jsx)(h.a.Item,{name:"paymentMethod",rules:[{required:!0,message:"Fields is required!"}],children:Object(C.jsxs)(q.a,{placeholder:"payment method",style:{width:"100%"},children:[Object(C.jsx)(U,{value:"CASH",children:"CASH"}),Object(C.jsx)(U,{value:"ABA",children:"ABA"})]})})}),Object(C.jsx)(f.a,{xs:24,children:Object(C.jsx)(y.a,{htmlType:"submit",type:"primary",style:{width:"100%"},children:"PAY"})})]})})})}function H(e){var t=e.handlePrintInvoice,r=n(92),i=Object(V.useState)([]),s=Object(x.a)(i,2),a=s[0],d=s[1],l=Object(V.useState)(!1),j=Object(x.a)(l,2),o=j[0],O=j[1],h=Object(V.useState)(!1),m=Object(x.a)(h,2),v=m[0],f=m[1],y=Object(V.useState)({}),g=Object(x.a)(y,2),I=g[0],w=g[1],A=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.get("api/order");case 3:t=e.sent,n=t.data,console.log(n),d(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p.b.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.put("api/order/".concat(t,"/deliver"));case 3:n=e.sent,c=n.data,console.log(c),!0===c.success?(f(!0),p.b.success("Order is delivered!")):p.b.error(c.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p.b.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){A(),f(!1)}),[v]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(G,{open:o,setOpen:O,setSuccess:f,data:I}),Object(C.jsx)(k.a,{className:"order-table",columns:B({handleEdit:function(e){w(e),O(!0)},handleDeliver:function(e){F(e._id)},handlePrintInvoice:t}),dataSource:a,pagination:!1})]})}var W=n(167),J=n(168),$=n(181),K=n(176),X=function(e){Object($.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){var e;console.log(this.props.printData);var t=this.props.printData;return Object(C.jsxs)("div",{style:{padding:20},className:"invoice-print",children:[Object(C.jsxs)("table",{className:"invoice-print",style:{width:"100%"},children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{style:{textAlign:"center",fontSize:12},children:"\u179c\u17b7\u1780\u17d2\u1780\u1799\u1794\u178f\u17d2\u179a"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{style:{textAlign:"right"},children:"\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791"}),Object(C.jsx)("td",{style:{textAlign:"center",border:"0.5px solid #CCCC"},children:Q()(null===t||void 0===t?void 0:t.createdAt).format("DD-MMM-YYYY")})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{children:"\u1797\u17bc\u1798\u17b7\u1790\u17d2\u1798\u17b8 \u179f\u1784\u17d2\u1780\u17b6\u178f\u17cb\u179f\u17d2\u179c\u17b6\u1799\u178a\u1784\u17d2\u1782\u17c6 \u1780\u17d2\u179a\u17bb\u1784\u179f\u17c0\u1798\u179a\u17b6\u1794 \u1781\u17c1\u178f\u17d2\u178f\u179f\u17c0\u1798\u179a\u17b6\u1794"}),Object(C.jsx)("td",{style:{textAlign:"right"},children:"\u179b\u17c1\u1781\u179c\u17b7\u1780\u17d2\u1780\u1799\u1794\u178f\u17d2\u179a"}),Object(C.jsx)("td",{style:{textAlign:"center",border:"0.5px solid #CCCC"},children:null===t||void 0===t?void 0:t.invoiceID})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{children:"\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u17c8 085 332 047"}),Object(C.jsx)("td",{style:{textAlign:"right"},children:"\u179b\u17c1\u1781\u1780\u17bc\u178a\u17a2\u178f\u17b7\u1790\u17b7\u1787\u1793"}),Object(C.jsx)("td",{style:{textAlign:"center",border:"0.5px solid #CCCC"}})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{colSpan:"2",style:{backgroundColor:"#AAAAAA",color:"#FFFFFF",fontSize:10},children:"\u1796\u17d0\u178f\u17cc\u1798\u17b6\u1793\u17a2\u178f\u17b7\u1790\u17b7\u1787\u1793"}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"\u1788\u17d2\u1798\u17c4\u17c7"}),Object(C.jsxs)("td",{children:["\u17d6 ",null===t||void 0===t?void 0:t.client]}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"\u1780\u17d2\u179a\u17bb\u1798\u17a0\u17ca\u17bb\u1793"}),Object(C.jsx)("td",{children:"\u17d6"}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"\u17a2\u17b6\u179f\u1799\u178a\u17d2\u178b\u17b6\u1793"}),Object(C.jsx)("td",{children:"\u17d6"}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"\u179b\u17c1\u1781\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u17c8"}),Object(C.jsx)("td",{children:"\u17d6"}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{})]})]}),Object(C.jsxs)("table",{className:"invoice-print description-order",style:{width:"100%"},children:[Object(C.jsxs)("tr",{style:{backgroundColor:"#AAA",color:"#FFF"},children:[Object(C.jsx)("th",{style:{textAlign:"left",fontSize:10},children:"\u179b.\u179a"}),Object(C.jsx)("th",{style:{textAlign:"center",width:"50%",fontSize:10},children:"\u1794\u179a\u17b7\u1799\u17b6\u1799"}),Object(C.jsx)("th",{style:{textAlign:"center",fontSize:10},children:"\u1785\u17c6\u1793\u17bd\u1793"}),Object(C.jsx)("th",{style:{textAlign:"center",fontSize:10},children:"\u178f\u1798\u17d2\u179b\u17c3\u179a\u17b6\u1799"}),Object(C.jsx)("th",{style:{textAlign:"center",fontSize:10},children:"\u178f\u1798\u17d2\u179b\u17c3\u179f\u179a\u17bb\u1794"})]}),null===t||void 0===t||null===(e=t.orderItems)||void 0===e?void 0:e.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t+1}),Object(C.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),Object(C.jsx)("td",{style:{textAlign:"center",width:"10%"},children:null===e||void 0===e?void 0:e.qty}),Object(C.jsxs)("td",{style:{textAlign:"center"},children:[(null===e||void 0===e?void 0:e.price)*P," \u17db"]}),Object(C.jsxs)("td",{style:{textAlign:"right"},children:[(null===e||void 0===e?void 0:e.price)*(null===e||void 0===e?void 0:e.qty)*P," \u17db"]})]})}))]}),Object(C.jsxs)("table",{className:"invoice-print",style:{width:"100%",marginTop:20},children:[Object(C.jsxs)("tr",{children:[Object(C.jsxs)("td",{style:{width:"50%"},children:["\u1785\u17c6\u178e\u17b6\u17c6\u17d6 ",null===t||void 0===t?void 0:t.remark]}),Object(C.jsx)("td",{style:{textAlign:"center",width:"10%"}}),Object(C.jsx)("td",{children:"\u179f\u179a\u17bb\u1794"}),Object(C.jsxs)("td",{style:{textAlign:"right"},children:[(null===t||void 0===t?void 0:t.totalPrice)*P," \u17db"]})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{children:"\u1794\u1789\u17d2\u1785\u17bb\u17c7\u178f\u1798\u17d2\u179b\u17c3"}),Object(C.jsx)("td",{style:{textAlign:"right"},children:null===t||void 0===t?void 0:t.discount})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{children:"\u179f\u179a\u17bb\u1794\u1785\u17bb\u1784\u1780\u17d2\u179a\u17c4\u1799"}),Object(C.jsxs)("td",{style:{textAlign:"right"},children:[(null===t||void 0===t?void 0:t.totalPrice)*P," \u17db"]})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{style:{backgroundColor:"#EEE"},children:"\u179b\u17bb\u1799\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793"}),Object(C.jsx)("td",{style:{textAlign:"right",backgroundColor:"#EEE"},children:"0"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),Object(C.jsx)("td",{children:"\u179b\u17bb\u1799\u17a2\u17b6\u1794\u17cb"}),Object(C.jsx)("td",{style:{textAlign:"right"},children:"0"})]})]}),Object(C.jsxs)(v.a,{style:{marginTop:20,textAlign:"center"},children:[Object(C.jsx)(f.a,{xs:12,children:"\u17a2\u17d2\u1793\u1780\u179b\u1780\u17cb"}),Object(C.jsx)(f.a,{xs:12,children:"\u17a2\u17d2\u1793\u1780\u178a\u17b9\u1780\u1787\u1789\u17d2\u1787\u17bc\u1793"})]}),Object(C.jsx)(v.a,{style:{marginTop:70,textAlign:"center",fontStyle:"italic"},children:Object(C.jsxs)(f.a,{xs:24,children:["\u179f\u17bc\u1798\u17a2\u179a\u1782\u17bb\u178e\u178a\u17c2\u179b\u1794\u17b6\u1793\u1791\u17b7\u1789\u1791\u17c6\u1793\u17b7\u1789\u1796\u17b8\u17a0\u17d2\u1782\u17c4\u1782\u17d2\u179b\u17bc\u1794\u17ca\u179b\u1798\u17c9\u17b6\u178f\u200c\u200c!!",Object(C.jsx)("br",{}),"Thank you!! Please come again"]})})]})}}]),n}(c.Component),Z=n(169),ee=n.n(Z);O.a.Meta;function te(){var e,t=h.a.useForm(),r=Object(x.a)(t,1)[0],i=Object(c.useState)(!1),s=Object(x.a)(i,2),a=s[0],d=s[1],o=Object(c.useRef)(),I=Object(c.useState)({}),w=Object(x.a)(I,2),A=w[0],E=w[1],q=n(92),z=Object(c.useState)(!1),M=Object(x.a)(z,2),R=M[0],Y=M[1],L=Object(c.useState)(!1),Q=Object(x.a)(L,2),B=(Q[0],Q[1],Object(c.useState)("")),V=Object(x.a)(B,2),U=V[0],G=V[1],W=Object(c.useState)({}),J=Object(x.a)(W,2),$=J[0],K=J[1],Z=Object(c.useState)(!1),te=Object(x.a)(Z,2),ne=te[0],ce=te[1],re=Object(c.useState)([]),ie=Object(x.a)(re,2),se=ie[0],ae=ie[1],de=Object(c.useState)([]),le=Object(x.a)(de,2),je=le[0],oe=le[1],be=Object(c.useState)(0),ue=Object(x.a)(be,2),xe=ue[0],Oe=ue[1],he=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.get("api/product");case 3:t=e.sent,n=t.data,oe(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p.b.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){he(),Y(!1)}),[R]);var pe=function(){var e=Object(u.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.get("api/dashboard");case 3:t=e.sent,n=t.data,K(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p.b.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){pe(),Y(!1)}),[R]);var me,ve,fe,ye,ge=function(e){var t=se.findIndex((function(t){return t._id===e._id})),n=[].concat(Object(j.a)(se),[{_id:e._id,name:e.name,qty:1,price:e.price,product:e._id}]);if(t>-1){var c=Object(l.a)(Object(l.a)({},se[t]),{},{qty:se[t].qty+1});n=[].concat(Object(j.a)(se.slice(0,t)),[c],Object(j.a)(se.slice(t+1)))}Oe(Ie(n)),ae(n)},ke=function(e){E(e),d(!0)},Ie=function(e){var t=0;return null===e||void 0===e||e.map((function(e,n){t+=e.price*e.qty})),t},we=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.post("/api/order",t);case 3:Y(!0),r.resetFields(),Oe(0),ae([]),p.b.success("Order has confirmed!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p.b.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Ae=0,Fe=0;(null===$||void 0===$||null===(e=$.totalSale)||void 0===e?void 0:e.length)>0&&(Ae=null===$||void 0===$||null===(me=$.totalSale[(null===$||void 0===$||null===(ve=$.totalSale)||void 0===ve?void 0:ve.length)-1])||void 0===me?void 0:me.total,Fe=null===$||void 0===$||null===(fe=$.totalSaleToday[(null===$||void 0===$||null===(ye=$.totalSaleToday)||void 0===ye?void 0:ye.length)-1])||void 0===fe?void 0:fe.total);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(m.a,{width:800,visible:a,footer:[Object(C.jsx)(ee.a,{trigger:function(){return Object(C.jsx)("button",{type:"primary",className:"btn-grad",children:"PRINT INVOICE"})},content:function(){return o.current}},"2")],onCancel:function(){return d(!1)},children:Object(C.jsx)(X,{ref:o,printData:A})}),Object(C.jsx)(D,{open:ne,setOpen:ce,setSuccess:Y}),Object(C.jsxs)(v.a,{style:{width:"80%",margin:"0 auto"},children:[Object(C.jsx)(f.a,{xs:24,md:8,style:{padding:10},children:Object(C.jsx)(O.a,{className:"card-menu",style:{height:"100%"},children:Object(C.jsxs)(v.a,{children:[Object(C.jsxs)(f.a,{xs:12,children:[Object(C.jsx)("h3",{children:"TOTAL PRODUCT"}),Object(C.jsx)("div",{style:{fontSize:38},children:(null===$||void 0===$?void 0:$.totalProduct)>0?null===$||void 0===$?void 0:$.totalProduct:0})]}),Object(C.jsx)(f.a,{xs:12,children:"salelist"!==U?Object(C.jsx)("button",{className:"btn-grad",onClick:function(){return G("salelist")},style:{width:"100%",backgroundColor:"#ff8b8c",color:"#FFFFFF"},children:"Sale List"}):null})]})})}),Object(C.jsx)(f.a,{xs:24,md:8,style:{padding:10},children:Object(C.jsx)(O.a,{className:"card-menu",children:Object(C.jsxs)(v.a,{children:[Object(C.jsxs)(f.a,{xs:12,children:[Object(C.jsx)("h3",{children:"TOTAL SALE"}),Object(C.jsx)("div",{style:{fontSize:38},children:F(Ae)})]}),Object(C.jsxs)(f.a,{xs:12,children:["orderlist"!==U?Object(C.jsx)("button",{className:"btn-grad",onClick:function(){return G("orderlist")},style:{width:"100%",backgroundColor:"#ff8b8c",color:"#FFFFFF"},children:"Order List"}):null,Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("h3",{children:["Today: ",F(Fe)]})]})]})})}),Object(C.jsx)(f.a,{xs:24,md:8,style:{padding:10},children:Object(C.jsxs)(y.a,{className:"card-menu",onClick:function(){return G("")},style:{width:"100%",height:"100%",backgroundColor:"#ff8b8c"},children:[Object(C.jsx)("h3",{children:"NEW ORDER"}),Object(C.jsx)("div",{style:{fontSize:38},children:Object(C.jsx)(T.a,{})})]})})]}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),""===U?Object(C.jsxs)(v.a,{children:[Object(C.jsxs)(f.a,{xs:24,md:12,style:{backgroundColor:"#F7F9FC",padding:10},children:[Object(C.jsx)(h.a,{form:r,name:"addUser",onFinish:function(e){var t=Ie(se);se.length>0?(console.log(Object(l.a)(Object(l.a)({},e),{},{orderItems:se,taxPrice:e.taxPrice>0?e.taxPrice:0,discount:e.discount>0?e.discount:0,totalPrice:t})),we(Object(l.a)(Object(l.a)({},e),{},{orderItems:se,taxPrice:e.taxPrice>0?e.taxPrice:0,discount:e.discount>0?e.discount:0,totalPrice:t}))):p.b.warning("No order!")},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{xs:6,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"invoiceID",rules:[{required:!0,message:"Field is required!"}],children:Object(C.jsx)(g.a,{placeholder:"#INVOICE"})})}),Object(C.jsx)(f.a,{xs:6,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"client",rules:[{required:!0,message:"Field is required!"}],children:Object(C.jsx)(g.a,{placeholder:"customer"})})}),Object(C.jsx)(f.a,{xs:12,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"shippingAddress",rules:[{required:!0,message:"Field is required!"}],children:Object(C.jsx)(g.a,{placeholder:"address"})})}),Object(C.jsx)(f.a,{xs:3,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"taxPrice",children:Object(C.jsx)(g.a,{type:"number",placeholder:"tax %"})})}),Object(C.jsx)(f.a,{xs:3,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"discount",children:Object(C.jsx)(g.a,{type:"number",placeholder:"dis %"})})}),Object(C.jsx)(f.a,{xs:5,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"deliveredBy",children:Object(C.jsx)(g.a,{placeholder:"deliver by"})})}),Object(C.jsx)(f.a,{xs:5,style:{padding:5},children:Object(C.jsx)(h.a.Item,{name:"remark",children:Object(C.jsx)(g.a,{placeholder:"remark"})})}),Object(C.jsx)(f.a,{xs:4,style:{padding:5},children:Object(C.jsx)(h.a.Item,{children:Object(C.jsx)(y.a,{style:{width:"100%"},htmlType:"submit",className:"btn-grad",children:"CONFIRM"})})}),Object(C.jsx)(f.a,{xs:4,style:{padding:5},children:Object(C.jsx)(h.a.Item,{children:Object(C.jsx)(y.a,{onClick:function(){return r.resetFields(),Oe(0),ae([]),void p.b.warn("Order has cancelled!")},style:{width:"100%"},type:"danger",disabled:(null===se||void 0===se?void 0:se.length)<=0,children:"CANCEL"})})})]})}),Object(C.jsx)(k.a,{columns:S({handleRemoveOrder:function(e){var t=se.findIndex((function(t){return t._id===e}));se.splice(t,1),ae(Object(j.a)(se)),Oe(Ie(se))},handlePlusQty:function(e){var t=se.findIndex((function(t){return t._id===e._id})),n=Object(l.a)(Object(l.a)({},se[t]),{},{qty:se[t].qty+1}),c=[].concat(Object(j.a)(se.slice(0,t)),[n],Object(j.a)(se.slice(t+1)));Oe(Ie(c)),ae(c)},handleMinusQty:function(e){var t=se.findIndex((function(t){return t._id===e._id})),n=Object(l.a)(Object(l.a)({},se[t]),{},{qty:se[t].qty-1}),c=[].concat(Object(j.a)(se.slice(0,t)),[n],Object(j.a)(se.slice(t+1)));Oe(Ie(c)),ae(c)},handleEditQty:function(e){var t=se.findIndex((function(t){return t._id===e._id})),n=Object(l.a)(Object(l.a)({},se[t]),{},{qty:e.newValue}),c=[].concat(Object(j.a)(se.slice(0,t)),[n],Object(j.a)(se.slice(t+1)));Oe(Ie(c)),ae(c)}}),dataSource:se,pagination:!1}),Object(C.jsxs)("h2",{style:{textAlign:"right"},children:["Total Price: ",xe.toFixed(2)]}),Object(C.jsxs)("h2",{style:{textAlign:"right"},children:["Riel: ",xe*P,"\u17db"]})]}),Object(C.jsx)(f.a,{xs:24,md:12,style:{backgroundColor:"#F7F9FC"},children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{xs:18,style:{padding:10},children:Object(C.jsx)(g.a,{placeholder:"Search for..."})}),Object(C.jsx)(f.a,{xs:6,style:{padding:10},children:Object(C.jsx)("button",{className:"btn-grad",onClick:function(){return ce(!0)},children:"NEW PRODUCT"})}),je.map((function(e,t){return Object(C.jsx)(N,{item:e,handleClick:ge})}))]})})]}):null,"orderlist"===U?Object(C.jsx)(v.a,{children:Object(C.jsx)(f.a,{xs:24,style:{padding:10},children:Object(C.jsx)(H,{handlePrintInvoice:ke})})}):null,"salelist"===U?Object(C.jsx)(v.a,{children:Object(C.jsx)(f.a,{xs:24,style:{padding:10},children:Object(C.jsx)(_,{handlePrintInvoice:ke})})}):null]})}var ne=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(a.a,{children:Object(C.jsx)(d.c,{children:Object(C.jsx)(d.a,{exact:!0,path:"/",children:Object(C.jsx)(te,{})})})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,305)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[290,1,2]]]);
//# sourceMappingURL=main.1f9c1e19.chunk.js.map