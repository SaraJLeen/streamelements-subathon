window.addEventListener('onSessionUpdate', function (obj) {
  let data = obj.detail.session;
  updateWidget(data);
});
window.addEventListener('onWidgetLoad', function (obj) {
  let data = obj.detail.session.data;
  updateWidget(data);
});

function updateWidget(data){
  let subs = data["subscriber-goal"]["amount"];
  let tips = data["tip-goal"]["amount"];
  let bits = data["cheer-goal"]["amount"];
  let total = parseFloat("{{baseNumber}}");
  if(parseFloat("{{subNumber}}") > 0)
    total = total + (subs / parseFloat("{{subNumber}}"));
  if(parseFloat("{{tipNumber}}")>0)
    total = total + (tips / parseFloat("{{tipNumber}}"));
  if(parseFloat("{{bitNumber}}")>0)
    total = total + (bits / parseFloat("{{bitNumber}}"));
  var element = document.querySelector('div.goalTotal');
  element.textContent = String(Math.trunc(total));
}