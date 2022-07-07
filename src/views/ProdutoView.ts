import Produto from "../entity/Produto";

export default {
  render(produto: Produto) {
    const {
      uniqueId, id, productId, productRefId, refId, ean, name, skuName, modalType, parentItemIndex, parentAssemblyBinding,
      assemblies, priceValidUntil, tax, price, listPrice, manualPrice, sellingPrice, rewardValue, isGift, additionalInfo,
      preSaleDate, productCategoryIds, productCategories, quantity, seller, sellerChain, imageUrl, detailUrl, components,
      bundleItems, attachments, attachmentOfferings, offerings, priceTags, availability, measurementUnit,
      unitMultiplier, manufacturerCode
    } = produto;
    return {
      uniqueId, id, productId, productRefId, refId, ean, name, skuName, modalType, parentItemIndex, parentAssemblyBinding,
      assemblies, priceValidUntil, tax, price, listPrice, manualPrice, sellingPrice, rewardValue, isGift, additionalInfo,
      preSaleDate, productCategoryIds, productCategories, quantity, seller, sellerChain, imageUrl, detailUrl, components,
      bundleItems, attachments, attachmentOfferings, offerings, priceTags, availability, measurementUnit,
      unitMultiplier, manufacturerCode
    };
  },
  renderMany(Produtos: Produto[]) {
    return Produtos.map(produto => this.render(produto));
  }
};