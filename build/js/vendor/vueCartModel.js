new Vue({
    el:'#bigCart',
    data:{
       cartItems: []
    }
})
Vue.component('cart-item', {
    props: ['name', 'qty','image','price'],
    template:` <div class="row bb-grey pb-3 mb-4">
    <div class="col-1">
        <p>X</p>
    </div>
    <div class="col-2 mini-cart-img">
        <img class="mini-cart-img" :src = "image">
    </div>
    <div class="col-3 regular-font helvetica bold">
        {{name}}
    </div>
    <div class="col-2">
        <p>
           {{price}}
        </p>
    </div>
    <div class="col-2">
        <div class = "qty-input"> 
            {{qty}}
        </div>
    </div>
    <div class="col-2">
        <p>$1000.00</p>
    </div>
</div>`
});