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
//FIN
         
