function PersonalMessagesComposer(r){function l(){window.PersonalMessagesComposerSavedInput=c={participants:[]}}function t(){m.on(a.settings.clickOrTouch,function(a){a.preventDefault();d.focus()});d.on("keyup",function(){d.width(100+3*d.val().length)});d.on("change",k)}function k(){c.subject=d.val();c.text=f.val();c.participants=g().getLabelsMetadata()}function u(){d.val(c.subject);f.val(c.text);$.each(c.participants,function(a,b){g().pushLabel(b.Name,b)})}function g(){return window[a.settings.participantsInstanceName]}
window[r]=this;var a=this,m,d,f,n,p,q=!1,c=window.PersonalMessagesComposerSavedInput,h,e;a.initialize=function(){c||l();m=$(a.settings.subjectContainerSelector);d=$(a.settings.subjectInputSelector);f=$(a.settings.replyTextAreaSelector);n=$(a.settings.newButtonSelector);p=$(a.settings.sendButtonSelector);e=a.settings.cssClasses;t();f.on("keyup",a.toggleSendButton);f.on("change",k);n.on(a.settings.clickOrTouch,function(){a.toggleSendButton();q||(q=!0,g().addLabelsChangedHandler(k),u())})};a.toggleSendButton=
function(){p.prop("disabled",!(0<g().getLabelsMetadata().length&&""!==f.val().trim()))};a.renderItem=function(c,b){return $("<li>").append(b.metadata?String.format("<a><img alt='' class='{0}' src='{1}'/><span class='{2}'><span>{3}</span>{4}{5}</span></a>",e.image,b.metadata.ImageUrl,e.info,b.label,b.metadata.ExtraInfo?String.format(" <span class='{0}'>({1})</span>",e.extraInfo,b.metadata.ExtraInfo):"",b.metadata.WithDetailedInformation?String.format("<span class='{0}'>{1}</span>",e.organization,b.metadata.Organization):
""):String.format("<span class='{0}'>{1}</span>",e.noMatches,a.settings.terms.noMatches)).addClass(e.item).appendTo(c)};a.participantsAutocomplete=function(c,b){var d=g();h&&h.abort&&h.abort();h=$.ajax({url:a.settings.participantsSearchServiceUrl,dataType:"jsonp",data:{search:c.term,useOtherCalendarsPreferences:!1,limitByAbilityToCommunicate:!0},success:function(a){a=a.filter(function(a){return 0===d.mapLabelsField("UserName").filter(function(b){return b===a.UserName}).length});a.length?b($.map(a,
function(a){return{label:a.Name,value:a.Name,metadata:a}})):b([{value:b.term}])},complete:function(a,b){h=void 0}})};a.clear=function(){l()}};
