class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL+"/getvisitor"
    static PostContact = this.BaseURL+"/postcontact"
    static AllSiteInfo = this.BaseURL+"/siteinfo"
    static AllCategoryDetails = this.BaseURL+"/categories"


    static ProductListByRemark(Remark){
        return this.BaseURL+"/products/"+Remark;
   }

   static ProductListByCategory(category){
        return this.BaseURL+"/products/category/"+category;
   }

   static ProductListBySubCategory(category,subcategory){
        return this.BaseURL+"/products/category/sub/"+category+"/"+subcategory;
   }


   static AllSlider = this.BaseURL+"/sliders"

}

export default AppURL