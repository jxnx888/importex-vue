

var showType_1 = 0;
var type_count_1 = 0;

function oldLayOutOfType(spiderTypeHtml,types){
  var typeName = "";
  for(var i=0;i<types.length;i++){
    var typeBean = types[i];
    if(typeBean.lableType!=''){
      if(typeName!=typeBean.lableType){
        if(i!=0){
          spiderTypeHtml = spiderTypeHtml + '</ul></div>';
        }
        spiderTypeHtml = spiderTypeHtml + '<div class="goods_pic clearFloat type_'+typeBean.lableType+'">';
        spiderTypeHtml = spiderTypeHtml + '<p class="goods_color">'+typeBean.type+':</p>';
        spiderTypeHtml = spiderTypeHtml + '<ul class="ul_color ul_type_initclick" id="ul_'+typeBean.lableType+'">';
        if(typeBean.img!=''&&typeBean.img!='null'){
          spiderTypeHtml = spiderTypeHtml + '<input type="hidden"  class="initclick_type_lableType" value="'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input type="hidden"  class="initclick_type_lableType_index" value="'+i+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid" value="" type="hidden" id="click_'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid_type" value="" type="hidden" id="click_type_'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid_img" value="" type="hidden" id="click_img_'+typeBean.lableType+'">';
        }
        if(typeBean.img==''||typeBean.img=='null'){
          spiderTypeHtml = spiderTypeHtml + '<input type="hidden"  class="initclick_type_lableType" value="'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input type="hidden"  class="initclick_type_lableType_index" value="'+i+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid" value="" type="hidden" id="click_'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid_type" value="" type="hidden" id="click_type_'+typeBean.lableType+'">';
          spiderTypeHtml = spiderTypeHtml + '<input class="type_clickid_img" value="" type="hidden" id="click_img_'+typeBean.lableType+'">';
        }
      }
      if(typeBean.img!=''&&typeBean.img!='null'){
        spiderTypeHtml = spiderTypeHtml + '<li class="li_color li_type_static liclass_'+typeBean.id+'" onclick="fnClickType(\''+typeBean.lableType+'\',\''+i+'\',this)" id="li_type_'+typeBean.lableType+i+'">';
      }
      if(typeBean.img==''||typeBean.img=='null'){
        spiderTypeHtml = spiderTypeHtml + '<li class="li_size li_type_static liclass_'+typeBean.id+'" onclick="fnClickType(\''+typeBean.lableType+'\',\''+i+'\',this)" id="li_type_'+typeBean.lableType+i+'">';
      }
      spiderTypeHtml = spiderTypeHtml + '<input value="'+i+'" id="typeIndex_index_'+typeBean.id+'" type="hidden">';
      spiderTypeHtml = spiderTypeHtml + '<input value="'+typeBean.id+'&'+typeBean.value+'&'+typeBean.lableType+'&'+typeBean.type+'&'+typeBean.img+'" id="typesku_'+i+'" type="hidden">';
      if(typeBean.img!=''&&typeBean.img!='null'){
        spiderTypeHtml = spiderTypeHtml + '<div class="div_color"><img src="'+typeBean.img+'" alt="'+typeBean.value+'" title="'+typeBean.value+'"/><span class="title_tip" title="'+typeBean.value+'">'+typeBean.value+'</span></div>';
      }
      if(typeBean.img==''||typeBean.img=='null'){
        spiderTypeHtml = spiderTypeHtml + '<em title="'+typeBean.value+'">' + typeBean.value.replace('<','&lt;').replace('>','&gt;')+ '</em>';
        spiderTypeHtml = spiderTypeHtml + '</li>';
      }
      typeName = typeBean.lableType;
      if(i==(types.length-1)){
        spiderTypeHtml = spiderTypeHtml + '</ul></div>';
      }
    }
  }
  console.log("spiderTypeHtml: "+spiderTypeHtml);
  return spiderTypeHtml;
}

export { //很关键
  oldLayOutOfType
}
