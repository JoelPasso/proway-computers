"use strict";(self.webpackChunkappvendas=self.webpackChunkappvendas||[]).push([[999],{9999:(_,p,r)=>{r.r(p),r.d(p,{ProdutosModule:()=>M});var s=r(6895),u=r(9541),l=r(737),o=r(1571),g=r(5447),h=r(8881);let m=(()=>{class n{constructor(t){this.snackbar=t}notificar(t){this.snackbar.open(t,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(h.ux))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=r(5087),a=r(433);const P=[{path:"",component:l.J},{path:":id",component:(()=>{class n{constructor(t,e,c,d){this.produtoService=t,this.route=e,this.notivicacaoServico=c,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtoService.getOne(e)}adicionarAoCarrinho(){this.notivicacaoServico.notificar("O produto foi adicionado ao carrinho");const t={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(g.z),o.Y36(u.gz),o.Y36(m),o.Y36(f.e))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-descripion__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return e.quantidade=d}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return e.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&t&&(o.xp6(2),o.Q6J("src",null==e.produto?null:e.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==e.produto?null:e.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==e.produto?null:e.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",e.quantidade),o.xp6(3),o.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.On,s.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-descripion__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(P),u.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.ez,C,a.u5]}),n})()}}]);