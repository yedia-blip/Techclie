const LG='icon-192.png',URL_='https://upjwtzugqolhqnwlzgjg.supabase.co',KEY_='sb_publishable_N3-e5JrS9mTqnygjdHdUXA_8QAcU_T1';
const $=s=>document.querySelector(s),esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LS={g:k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},d:k=>{try{localStorage.removeItem(k)}catch(e){}}};
const I={chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',plus:'<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',edit:'<path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .7-1.5l7-5.8a2 2 0 0 1 2.6 0l7 5.8A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',brief:'<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',cap:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',chev:'<path d="m9 18 6-6-6-6"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',dash:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',building:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',folder:'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',filetext:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',mega:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 0 1 0 4H8M12 17.5v-11"/>',cal:'<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'};
const ic=(n,on,s)=>`<svg viewBox="0 0 24 24" width="${s||26}" height="${s||26}" fill="none" stroke="currentColor" stroke-width="${on?2.4:1.7}" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
const pwi=(id,p)=>`<div class="pwr"><input id="${id}" type="password" placeholder="${p}" autocomplete="current-password"><button type="button" onclick="const e=$('#${id}');e.type=e.type=='password'?'text':'password'">${ic('eye')}</button></div>`;
let sb,me,CO,TM=[],VIL=[],MET=[],N={sk:[]},T,P,timer;
const NAVT=[['dash','Bureau','home()'],['chat','Messages','msgs()'],['brief','Offres','offt()'],['wallet','Dépôt','dep()'],['user','Compte','acc()']],NAVC=[['home','Accueil','home()'],['chat','Messages','msgs()'],['plus','Offre','nof()'],['wallet','Dépôt','dep()'],['user','Compte','acc()']];
const LD='<div class="c" style="display:flex;justify-content:center;padding-top:38vh"><div class="dts"><i></i><i></i><i></i></div></div>';
const TH={g:()=>{try{return localStorage.getItem('tcu_theme')||'auto'}catch(e){return 'auto'}}};
function ath(){const p=TH.g(),l=matchMedia('(prefers-color-scheme: light)').matches,r=p=='auto'?(l?'light':'dark'):p;document.documentElement.dataset.theme=r;const m=document.querySelector('meta[name=theme-color]');if(m)m.content=r=='light'?'#f0f2f6':'#0f1115'}
function sth(t){try{localStorage.setItem('tcu_theme',t)}catch(e){}ath();if($('#thm'))acc()}
function hsp(){const s=$('#sp');if(!s)return;s.classList.add('out');setTimeout(()=>s.remove(),400)}
const AV=(id,nom,ph,s)=>{const u=ph?`${URL_}/storage/v1/object/public/avatars/${id}/avatar.jpg?v=${Date.parse(ph)}`:'';return u?`<img class="av2" src="${u}" style="width:${s}px;height:${s}px" alt="">`:`<span class="av2" style="width:${s}px;height:${s}px;font-size:${Math.round(s*.42)}px">${esc((nom||'?')[0].toUpperCase())}</span>`};
const HD=t=>`<div class="hbar"><div class="hdw" onclick="acc()">${AV(me.id,me.nom,me.photo_maj,48)}<div><span class="app">${me.role=='technicien'&&CO?esc(CO.nom):'Chercheur · '+esc(me.nom.split(' ')[0])}</span><b class="pt">${t}</b></div></div></div>`;
function R(h,i,m){clearInterval(timer);let hd='';document.body.className=m||'';if(i!=null&&!m){const t=h.match(/<h2>(.*?)<\/h2>/);if(t){h=h.replace(t[0],'');hd=HD(t[1])}}
  $('#app').innerHTML=hd+h;const n=$('#nav'),L=me&&me.role=='chercheur'?NAVC:NAVT;n.style.display=i!=null?'flex':'none';
  n.innerHTML=i!=null?L.map((t,k)=>`<button class="${k==i?'on':''}" onclick="${t[2]}">${k==2?`<span class="ci">${ic(t[0],k==i)}</span>`:ic(t[0],k==i)}<span>${t[1]}</span></button>`).join(''):'';scrollTo(0,0)}
function ER(t,g){const c=$('#app .c');if(!c)return 0;let e=$('#er');if(!e){e=document.createElement('div');e.id='er';const h=c.querySelector('h2');c.insertBefore(e,h?h.nextSibling:c.firstChild)}e.className=g?'okb':'er';e.textContent=t;scrollTo(0,0);return 0}
const msg=(t,b,i)=>R(`<div class="c"><div class="k">${esc(t)}</div><button class="b" onclick="${b}">Continuer</button></div>`,i);
const F=n=>Math.round(n||0).toLocaleString('fr-FR')+' Fc';
const note=(t,g)=>{const e=$('#msg');if(e)e.innerHTML=`<div class="${g?'okb':'er'}">${esc(t)}</div>`};
const gr=()=>{const h=new Date().getHours();return h<12?'Bonjour':h<18?'Bon après-midi':'Bonsoir'};
var DI=null;addEventListener('beforeinstallprompt',e=>{e.preventDefault();DI=e});
const inst=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone;
async function doi(){if(!DI)return;DI.prompt();try{await DI.userChoice}catch(e){}DI=null;const k=$('#ik');if(k)k.remove()}
const fr=e=>{const m=String(e&&e.message||e||'');
 if(/Invalid login/i.test(m))return 'Connexion refusée : e-mail ou mot de passe incorrect. Si tu as oublié ton mot de passe, utilise « Mot de passe oublié ».';
 if(/already registered|already been registered/i.test(m))return 'Inscription bloquée : cette adresse e-mail est déjà utilisée par un autre compte TechClie.';
 if(/rate limit|too many|only request this once/i.test(m))return 'Trop de tentatives : patiente quelques minutes avant de réessayer (limite d’envoi de codes).';
 if(/expired|invalid.*token|token.*invalid|otp/i.test(m))return 'Code refusé : il est incorrect ou expiré. Demande un nouveau code.';
 if(/not confirmed/i.test(m))return 'Connexion bloquée : ton adresse e-mail n’est pas encore vérifiée. Entre le code reçu par e-mail.';
 if(/phone|sms|provider/i.test(m))return 'La vérification du téléphone par SMS n’est pas encore disponible. Réessaie plus tard.';
 if(/fetch|network/i.test(m))return 'Connexion impossible : vérifie ta connexion internet.';return m};
async function start(){
  if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
  ath();matchMedia('(prefers-color-scheme: light)').addEventListener('change',ath);
  if(typeof supabase==='undefined'){R('<div class="c"><div class="er">La bibliothèque Supabase ne s’est pas chargée. Vérifie ta connexion internet puis recharge la page.</div></div>');return hsp()}
  sb=supabase.createClient(URL_,KEY_,{auth:{storageKey:'tc-user-auth'}});
  const [v,m]=await Promise.all([sb.from('villes').select('nom').order('nom'),sb.from('metiers').select('id,nom,categorie,actif').order('categorie').order('nom'),new Promise(r=>setTimeout(r,1900))]);
  VIL=(v.data||[]).map(x=>x.nom);MET=m.data||[];
  const {data}=await sb.auth.getSession();
  if(data.session)await load();else LS.g('tc_seen')?wel():onb(0);hsp()}
const OB=[['Trouve un technicien','Électricien, plombier, mécanicien… dans ta ville, vérifié par un test.'],['Discute et fixe le prix','Rendez-vous, devis et prix se décident dans la discussion, avant tout engagement.'],['Gère ton entreprise','Les techniciens ouvrent leur entreprise et gèrent leur activité depuis leur téléphone.']];
function onb(i){R(`<div class="c lg"><h2>${OB[i][0]}</h2><p class="m" style="font-size:16px">${OB[i][1]}</p><div style="margin:26px 0">${OB.map((_,k)=>`<i style="display:inline-block;height:8px;border-radius:4px;margin:3px;background:${k==i?'var(--ac)':'var(--bd2)'};width:${k==i?22:8}px"></i>`).join('')}</div><button class="b" onclick="${i<2?'onb('+(i+1)+')':'wel()'}">${i<2?'Suivant':'Commencer'}</button><button class="b g" onclick="wel()">Passer</button></div>`)}
function wel(){LS.s('tc_seen',1);R(`<div class="c lg"><h2>Bienvenue</h2><p class="m">Choisis comment utiliser TechClie</p>${inst()?'':`<div class="k" id="ik"><b>Installer TechClie</b><p class="m">Ajoute l’application sur l’écran d’accueil de ton téléphone. C’est facultatif.</p>${DI?'<button class="b" onclick="doi()">Installer l’application</button>':'<p class="m">Menu ⋮ du navigateur, puis « Installer l’application ».</p>'}<button class="b g" onclick="$(\'#ik\').remove()">Plus tard</button></div>`}<button class="b" onclick="reg('technicien')">Je suis technicien</button><button class="b g" onclick="reg('chercheur')">Je cherche un technicien</button><button class="b g" onclick="login()">J’ai déjà un compte</button></div>`)}
function reg(role){const y=[];for(let i=2008;i>=1940;i--)y.push(i);
R(`<div class="c"><h2>${role=='technicien'?'Compte technicien':'Compte client'}</h2><input id="nm" placeholder="Nom complet" autocomplete="name"><select id="sx"><option value="">Sexe</option><option>Homme</option><option>Femme</option></select><p class="m">Date de naissance (tape l’année pour la chercher)</p><div class="row"><input id="dy" list="yl" inputmode="numeric" placeholder="Année"><select id="dm"><option value="">Mois</option>${['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'].map((m,i)=>`<option value="${i+1}">${m}</option>`).join('')}</select><select id="dd"><option value="">Jour</option>${Array.from({length:31},(_,i)=>`<option>${i+1}</option>`).join('')}</select></div><datalist id="yl">${y.map(v=>`<option value="${v}">`).join('')}</datalist><input id="vl" list="cl" placeholder="Ville (tape pour chercher)"><datalist id="cl">${VIL.map(v=>`<option value="${esc(v)}">`).join('')}</datalist><input id="tl" inputmode="tel" placeholder="Numéro de téléphone (+243…)"><p class="m" style="margin-top:0">Le numéro doit commencer par +243 (exemple : +243 81 234 5678).</p><input id="em" type="email" placeholder="Adresse e-mail" autocomplete="email">${pwi('pa','Mot de passe')}${pwi('pb','Confirmer le mot de passe')}<p class="m">Au moins 6 caractères. Tu en auras besoin pour te reconnecter.</p><button class="b" onclick="sub('${role}')">Créer mon compte</button><button class="b g" onclick="wel()">Retour</button></div>`)}
async function mk(d){const {error}=await sb.rpc('creer_profil',{p_role:d.role,p_nom:d.nom,p_sexe:d.sexe,p_naissance:d.dn,p_ville:d.ville,p_telephone:d.tel,p_email:d.em});return error?error.message:null}
async function sub(role){
  const g=i=>$('#'+i).value.trim(),y=+g('dy'),tel=g('tl').replace(/[\s-]/g,''),em=g('em').toLowerCase(),pw=$('#pa').value;
  if(!g('nm')||!g('sx')||!(y>=1940&&y<=2008)||!g('dm')||!g('dd'))return ER('Informations incomplètes : complète le nom, le sexe et une date de naissance valide.');
  if(!VIL.includes(g('vl')))return ER('Ville refusée : choisis ta ville dans la liste proposée.');
  if(!/^\+243\d{9}$/.test(tel))return ER('Numéro refusé : il doit commencer par +243, suivi de 9 chiffres (exemple : +243 81 234 5678).');
  if(!/^\S+@\S+\.\S+$/.test(em))return ER('Adresse e-mail refusée : vérifie qu’elle est écrite correctement.');
  if(pw.length<6)return ER('Mot de passe refusé : il doit avoir au moins 6 caractères.');
  if(pw!=$('#pb').value)return ER('Mot de passe refusé : les deux mots de passe sont différents.');
  const dn=y+'-'+String(g('dm')).padStart(2,'0')+'-'+String(g('dd')).padStart(2,'0');
  const {data:c}=await sb.rpc('identifiants_libres',{p_nom:g('nm'),p_tel:tel,p_email:em});
  const X={nom:'Inscription bloquée : ce nom est déjà utilisé par un autre compte TechClie. Un même nom ne peut servir qu’à un seul compte, technicien ou chercheur.',telephone:'Inscription bloquée : ce numéro de téléphone est déjà utilisé par un autre compte TechClie (technicien ou chercheur). Un numéro ne peut servir qu’à un seul compte.',email:'Inscription bloquée : cette adresse e-mail est déjà utilisée par un autre compte TechClie. Une adresse ne peut servir qu’à un seul compte.'};
  if(c&&c.length)return ER(X[c[0]]+' Si ce compte est le tien, connecte-toi ou récupère-le.');
  P={role,nom:g('nm'),sexe:g('sx'),dn,ville:g('vl'),tel,em};
  const {data,error}=await sb.auth.signUp({email:em,password:pw});if(error)return ER(fr(error));
  LS.s('tc_pending',P);
  if(data.session)return pv();
  cv()}
function cv(){R(`<div class="c"><h2>Vérification de l’e-mail</h2><p class="m">Un code a été envoyé à ${esc(P.em)}. Entre-le ci-dessous.</p><input id="cd" inputmode="numeric" maxlength="10" placeholder="Code reçu par e-mail"><button class="b" onclick="ck()">Vérifier</button><button class="b g" onclick="rsd()">Renvoyer le code</button></div>`)}
async function ck(){const {error}=await sb.auth.verifyOtp({email:P.em,token:$('#cd').value.trim(),type:'signup'});if(error)return ER(fr(error));pv()}
async function rsd(){const {error}=await sb.auth.resend({type:'signup',email:P.em});error?ER(fr(error)):ER('Nouveau code envoyé.',1)}
async function load(){
  let {data:p}=await sb.from('profiles').select('*').maybeSingle();
  if(!p){const d=LS.g('tc_pending');if(d){P=d;return pv()}}
  if(!p){await sb.auth.signOut();return login('Ce compte n’a pas de profil TechClie complet. Recommence l’inscription.')}
  me=p;return home()}
function login(m){R(`<div class="c lg"><h2>Connexion</h2>${m?`<div class="er">${esc(m)}</div>`:''}<div class="k"><input id="em" type="email" placeholder="Adresse e-mail" autocomplete="username">${pwi('pw','Mot de passe')}<button class="b" onclick="go()">Se connecter</button><button class="b g" onclick="rec()">Mot de passe oublié ?</button></div><button class="b g" onclick="wel()">Retour</button></div>`)}
async function go(){const {error}=await sb.auth.signInWithPassword({email:$('#em').value.trim().toLowerCase(),password:$('#pw').value});if(error)return ER(fr(error));load()}
function rec(){R(`<div class="c"><h2>Récupérer mon compte</h2><p class="m">Entre l’adresse e-mail de ton compte. Nous t’envoyons un code temporaire.</p><input id="em" type="email" placeholder="Adresse e-mail"><button class="b" onclick="rc()">Envoyer le code</button><button class="b g" onclick="login()">Retour</button></div>`)}
async function rc(){const em=$('#em').value.trim().toLowerCase();P={em};const {error}=await sb.auth.signInWithOtp({email:em,options:{shouldCreateUser:false}});
  if(error)return ER(/not found|signups not allowed|user/i.test(error.message)?'Récupération bloquée : aucun compte TechClie ne correspond à cette adresse e-mail. Écris-la exactement comme à la création du compte. Tant qu’elle ne correspond pas, aucun code n’est envoyé.':fr(error));
  R(`<div class="c"><h2>Code temporaire</h2><p class="m">Un code a été envoyé à ${esc(em)}.</p><input id="cd" inputmode="numeric" maxlength="10" placeholder="Code reçu par e-mail"><button class="b" onclick="rk()">Récupérer mon compte</button></div>`)}
async function rk(){const {error}=await sb.auth.verifyOtp({email:P.em,token:$('#cd').value.trim(),type:'email'});if(error)return ER('Accès bloqué : '+fr(error));
  R(`<div class="c"><h2>Nouveau mot de passe</h2><p class="m">Choisis un nouveau mot de passe pour ton compte.</p>${pwi('pa','Nouveau mot de passe')}<button class="b" onclick="np()">Enregistrer</button></div>`)}
async function np(){const v=$('#pa').value;if(v.length<6)return ER('Mot de passe refusé : au moins 6 caractères.');const {error}=await sb.auth.updateUser({password:v});if(error)return ER(fr(error));load()}
async function out(){await sb.auth.signOut();me=null;CO=null;TM=[];wel()}
async function pv(){
  const {data:pr}=await sb.from('parametres').select('valeur').eq('cle','verif_telephone').maybeSingle();
  if(!(pr&&pr.valeur===true))return cr();
  const {error}=await sb.auth.updateUser({phone:P.tel});
  if(error)return R(`<div class="c"><h2>Vérification du téléphone</h2><div class="er">${esc(fr(error))}</div><button class="b" onclick="pv()">Réessayer</button></div>`);
  R(`<div class="c"><h2>Vérification du téléphone</h2><p class="m">Un code a été envoyé par SMS au ${esc(P.tel)}. Entre-le ci-dessous.</p><input id="cd" inputmode="numeric" maxlength="10" placeholder="Code reçu par SMS"><button class="b" onclick="ck2()">Vérifier</button><button class="b g" onclick="pv()">Renvoyer le code</button></div>`)}
async function ck2(){const {error}=await sb.auth.verifyOtp({phone:P.tel,token:$('#cd').value.trim(),type:'phone_change'});if(error)return ER(fr(error));cr()}
async function cr(){const e=await mk(P);if(e)return R(`<div class="c"><h2>Création du compte</h2><div class="er">${esc(e)}</div><button class="b" onclick="wel()">Retour</button></div>`);LS.d('tc_pending');load()}
   
