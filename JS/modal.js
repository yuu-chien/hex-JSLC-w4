export default {
    props: ['modal'],
    template: `<div class="row modal-body">
        <!-- - 商品名稱 - -->
        <div class="col-12 form-group">
        <label for="edit-title">商品名稱</label>
        <input type="text" class="form-control" id="edit-title" aria-describedby="edit-titleHelp" v-model="modal.title">
        </div>
        <!-- - 中間內容左邊 - -->
        <div class="col-6">
        <!-- - 商品圖片 - -->
        <div class="form-group">
            <label for="edit-imageUrl">商品圖片網址</label>
            <input type="text" class="form-control" id="edit-imageUrl" aria-describedby="edit-imageUrlHelp" v-model="modal.imageUrl[0]">
        </div>
        <!-- - 商品分類 - -->
        <div class="form-group">
            <label for="edit-category">商品分類</label>
            <select class="form-control" id="edit-category" v-model="modal.category">
            <option value="Shirt">Shirt</option>
            <option value="Socks">Socks</option>
            <option value="Swimwear">Swimwear</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Pants">Pants</option>
            </select>
        </div>
        <!-- - 商品狀態 - -->
        <div class="form-group">
            <label for="edit-enabledState">商品狀態</label>
            <select class="form-control" id="edit-enabledState" v-model="modal.enabled">
            <option :value=true>上架中</option>
            <option :value=false>下架中</option>
            </select>
        </div>
        <!-- - 商品單位 - -->
        <div class="form-group">
            <label for="edit-unit">單位</label>
            <input type="text" class="form-control" id="edit-unit" aria-describedby="edit-unitHelp" v-model="modal.unit">
        </div>
        <!-- - 商品原價 - -->
        <div class="form-group">
            <label for="edit-origin_price">原價</label>
            <input type="number" class="form-control" id="edit-origin_price" v-model="modal.origin_price">
        </div>
        <!-- - 商品售價 - -->
        <div class="form-group">
            <label for="edit-price">售價</label>
            <input type="number" class="form-control" id="edit-price" v-model="modal.price">
        </div>
        <!-- - 商品短述 - -->
        <div class="form-group">
            <label for="edit-content">商品短述</label>
            <input type="text" class="form-control" id="edit-content" aria-describedby="edit-contentHelp" v-model="modal.content">
        </div>
        </div>
        <!-- - 圖片預覽 - -->
        <div class="col-6 form-group">
        <p>商品預覽<p>
        <div class="_c_product-preview">
            <img :src="modal.imageUrl[0]" alt="">
        </div>
        </div>

        <!-- - 商品詳述 - -->
        <div class="col-12 form-group">
        <label for="edit-description">商品詳述</label>
        <textarea class="form-control" id="edit-description" rows="3" v-model="modal.description"></textarea>
        </div>
    </div>`,
}


