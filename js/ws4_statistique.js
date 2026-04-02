
fetch('http://localhost:3000/todos', {
    /* MISE EN COMMENTAIRE POUR TRAVAIL
    headers:{
        'Authorization':'Bearer' + token
    } */

})
    .then(data => data.json())
    .then(projects => {
        console.log('serveur récupère data');

        const todolist = projects[0].todolist;

        /*// COMPTEUR TACHE EN COURS //*/
        const Count_TaskEnCours = Compteur_TaskEnCours(todolist);
        console.log('Nombre de tâches en cours :', Count_TaskEnCours);


        const stat_TaskEnCours = document.querySelector('.NbreTacheEnCours');
        const baliseT_stat_TaskEnCours = document.createElement('div');
        const baliseImg_stat_TaskEnCours = document.createElement('div');

        //Text tache en cours
        const TextTaskEnCours = document.createElement('span');
        TextTaskEnCours.textContent = 'Nombre de tâches en cours : ';

        //Compteur tache en cours
        const NombreTaskEnCours = document.createElement('span');
        NombreTaskEnCours.textContent = Count_TaskEnCours + '/' + todolist.length;

        //Image de tache en cours
        const img_stat_TaskEnCours = document.createElement('img');
        img_stat_TaskEnCours.src = '../images/statistique/nbre_tache_faire.png';
        img_stat_TaskEnCours.alt = 'Tâches en cours';

        //Relation parent/enfant
        baliseT_stat_TaskEnCours.appendChild(TextTaskEnCours);
        baliseT_stat_TaskEnCours.appendChild(NombreTaskEnCours);
        baliseImg_stat_TaskEnCours.appendChild(img_stat_TaskEnCours);

        stat_TaskEnCours.appendChild(baliseT_stat_TaskEnCours);
        stat_TaskEnCours.appendChild(baliseImg_stat_TaskEnCours);
        /*////////////////////////////////////////////////////////////////////////////*/

        /*// COMPTEUR TACHE COMPLETE //*/
        const CountTaskComplete = Compteur_TaskComplete(todolist);
        console.log('Nombre de tâches terminées :', CountTaskComplete);


        const stat_TaskDone = document.querySelector('.NbreTacheDone');
        const baliseT_stat_TaskDone = document.createElement('div');
        const baliseImg_stat_TaskDone = document.createElement('div');

        //Text tache complet
        const TextTaskDone = document.createElement('span');
        TextTaskDone.textContent = 'Nombre de tâches terminées : ';

        //Compteur tache complete
        const NombreTaskDone = document.createElement('span');
        NombreTaskDone.textContent = CountTaskComplete + '/' + todolist.length;

        //Image de tache complete
        const img_stat_TaskDone = document.createElement('img');
        img_stat_TaskDone.src = '../images/statistique/nbr_tache_done.png';
        img_stat_TaskDone.alt = 'Tâches terminées';

        //Relation parent/enfant
        baliseT_stat_TaskDone.appendChild(TextTaskDone);
        baliseT_stat_TaskDone.appendChild(NombreTaskDone);
        baliseImg_stat_TaskDone.appendChild(img_stat_TaskDone);

        stat_TaskDone.appendChild(baliseT_stat_TaskDone);
        stat_TaskDone.appendChild(baliseImg_stat_TaskDone);
        /*////////////////////////////////////////////////////////////////////////////*/

        /*// COMPTEUR TACHE COMPLETE //*/
        const CountTaskTotal = todolist.length;
        console.log('Nombre de tâches total :', CountTaskTotal);


        const stat_TaskTotal = document.querySelector('.NbreTacheTotal');
        const baliseT_stat_TaskTotal= document.createElement('div');
        const baliseImg_stat_TaskTotal = document.createElement('div');

        //Text tache complet
        const TextTaskTotal = document.createElement('span');
        TextTaskTotal.textContent = 'Nombre de tâches total: ';

        //Compteur tache complete
        const NombreTaskTotal = document.createElement('span');
        NombreTaskTotal.textContent = CountTaskTotal;

        //Image de tache complete
        const img_stat_TaskTotal = document.createElement('img');
        img_stat_TaskTotal.src = '../images/statistique/nbre_tache_total.png';
        img_stat_TaskTotal.alt = 'Tâches total';

        //Relation parent/enfant
        baliseT_stat_TaskTotal.appendChild(TextTaskTotal);
        baliseT_stat_TaskTotal.appendChild(NombreTaskTotal);
        baliseImg_stat_TaskTotal.appendChild(img_stat_TaskTotal);

        stat_TaskTotal.appendChild(baliseT_stat_TaskTotal);
        stat_TaskTotal.appendChild(baliseImg_stat_TaskTotal);
        /*////////////////////////////////////////////////////////////////////////////*/






    });



function Compteur_TaskComplete(todolist) {
    const nbComplete = todolist.filter(task => task.is_complete === true).length;
    return nbComplete;
};

function Compteur_TaskEnCours(todolist) {
    const nbEnCours = todolist.filter(task => task.is_complete === false).length;
    return nbEnCours;
};