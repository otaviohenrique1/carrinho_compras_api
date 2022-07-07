export default class Produto {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: any;
  refId: any;
  ean: string;
  name: string;
  skuName: string;
  modalType: any;
  parentItemIndex: any;
  parentAssemblyBinding: any;
  assemblies: [];
  priceValidUntil: string;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: any;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: {
    brandName: string,
    brandId: string,
    offeringInfo: any,
    offeringType: any,
    offeringTypeId: any
  };
  preSaleDate: any;
  productCategoryIds: string;
  productCategories: any;
  quantity: number;
  seller: string;
  sellerChain: [];
  imageUrl: string;
  detailUrl: string;
  components: [];
  bundleItems: [];
  attachments: [];
  attachmentOfferings: [];
  offerings: [];
  priceTags: {
    name: string,
    value: number,
    rawValue: number,
    isPercentual: boolean,
    identifier: string
  }[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: any;
}
