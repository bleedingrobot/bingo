// Firebase config and constants
const firebaseConfig = {
  apiKey: "AIzaSyDeQPS8fkc6uH9shQye35At98Fa5V62Z7A",
  authDomain: "bingo-e3517.firebaseapp.com",
  databaseURL: "https://bingo-e3517-default-rtdb.firebaseio.com",
  projectId: "bingo-e3517",
  storageBucket: "bingo-e3517.appspot.com",
  messagingSenderId: "338765367468",
  appId: "1:338765367468:web:9d539fe8e1b5351c123709",
  measurementId: "G-VFXRMS6LN7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// FULL DEFAULT_ITEMS array (100+ elements, unabridged)
const DEFAULT_ITEMS = [
  "The Wi-Fi password is written on a whiteboard",
  "Key concept defined early in the session",
  "Presenter’s family photo",
  "Awkward mixer",
  "You are asked to write something on post-it notes",
  "Personal anecdote involving presenter’s children",
  "You are asked to share the ideas of someone you have talked to",
  "An evaluation sheet to finish the day",
  "A takeaway task to do at school",
  "Presenter will say, “Chat with the person next to you about what you’re thinking about.”",
  "Awkward silence",
  "You are asked to share an example of practice from your school",
  "Whole group sharing",
  "Presenter uses the word “mahi” or “kai.”",
  "A title on the PowerPoint ends in a question mark",
  "Someone leaves while the presenter is talking to use the toilet",
  "Presenter affirms someone’s emotions or feelings",
  "Presenter stands with hands on hips",
  "Presenter moves closer to your group, and you immediately pretend to be talking about what you were asked to",
  "Presenter quotes an academic",
  "Presenter invites you to agree or disagree with an idea",
  "Event would be better with air conditioning",
  "Presenter “parks” a question",
  "Badly pronounced te reo whakataukī",
  "Presenter has a brown A3 bit of paper with “Questions” written on it pinned up in an obscure corner of the room",
  "Someone gets overly passionate or emotional",
  "Finish early",
  "Presenter will say something to the effect of, “You may have seen this before,” or “I may have shared this before.”",
  "The word wharepaku is used",
  "Someone is late back from lunch and awkwardly apologises or sneaks in",
  "Someone is sitting near a power outlet to charge their laptop",
  "Asked to share back a “key message”",
  "PowerPoint contains a graph",
  "The speaker is interrupted by a school bell",
  "Presenter gives out pens or coloured markers",
  "Presenter gives an over-the-top fake smile",
  "Presenter touches the fingers of each hand together",
  "A post-it fails to stay where it was placed",
  "Someone says something to the effect of, “I’ll share the slides with you later.”",
  "Someone takes a photograph of the slides from a ridiculous distance that they will never look at again",
  "You see someone on social media",
  "The presenter is wearing an overly flamboyant item of clothing showing how interesting and creative they are",
  "Presenter says, “I’m not an expert.”",
  "Presenter has oversized jewellery",
  "Te Aroha is sung",
  "PowerPoint has a GIF",
  "There will be a technical difficulty, and the presenter will make awkward jokes about it",
  "Someone will leave early but in an awkward way drawing too much attention to themselves",
  "A continuum is used in some way",
  "Two participants whisper incessantly",
  "PD starts with a video to get everyone in the mood",
  "Teachers (who should know better) don’t shut up when they should",
  "Someone leaves early to pick up the kids",
  "There is a task to “get you thinking.”",
  "PowerPoint contains a bullet-pointed list with more than four bullet points",
  "A title on the PowerPoint ends in an exclamation mark",
  "Presenter uses a phrase that could be interpreted in a dirty way, e.g., “Go slow, go deep, do it well...”",
  "The speaker makes a circular gesture with their hands to show “the whole” or the breadth or size of something",
  "The sound does not work on a video",
  "The speaker points at an audience member",
  "Someone thanks the presenter and may give them a gift as a token of appreciation for an appearance they are probably being paid quite well for",
  "The presenter displays a matrix",
  "The presenter displays some text that is far too small to read but carries on like it’s clearly legible",
  "The presenter displays a slide and then says, “Let’s just skip that one.”",
  "You hear a condescending repetition of something that has already been said",
  "Someone leaves to get more chairs",
  "Participant vehemently disagrees with presenter on a relatively minor point that didn’t really need extra discussion",
  "Presenter makes a reference to teacher workload",
  "One participant starts talking more than the presenter",
  "One participant sits on their computer and does not interact with anyone else",
  "Lunch is provided",
  "A primary teacher is overexcited and energetic",
  "A secondary school teacher is cool and aloof",
  "Management flits in and out during the day",
  "Agree to have a shorter lunch break but get to finish early",
  "Presenter has distinctive shoes",
  "Presenter’s joke falls flat",
  "Presenter says something to the effect of, “Please eat up; we don’t want anything left over.”",
  "Presenter says something to the effect of, “What are you going to take back to the classroom?”",
  "A participant keeps talking and acting like a god-damn hippy",
  "A participant rolls their eyes when someone else keeps acting like a god-damn hippy",
  "Someone identifies time as a reason for not implementing a change",
  "Someone identifies money as a reason for not implementing a change",
  "Presenter uses upbeat music to make the event more fun and engaging",
  "A word on the PowerPoint is written in ALL CAPS for effect",
  "Presenter includes a cartoon/joke on the PowerPoint as a brain break",
  "The term “blue sky thinking” is used",
  "The presenter shows a slide with a lot of text and says, “I’ll just give you a moment to read that.”",
  "Presenter describes learning with an interesting metaphor",
  "A question directed to someone who was clearly off task",
  "Presenter brandishes a pen like a wand or a sword",
  "Presenter shares a story or picture of a pet",
  "Presenter appears visibly nervous",
  "Someone cries",
  "Presenter says something to the effect of, “Now that you have had some lunch...”",
  "Presenter references themselves",
  "Presenter gets someone’s name wrong",
  "A wardrobe malfunction",
  "Someone’s phone goes off",
  "Participant doodles",
  "Presenter asks a question and gets no response",
  "Someone complains",
  "Participant asks for a copy of the slides",
  "Presenter apologises",
  "Someone laughs way too loudly",
  "Someone wears a distracting or unusual outfit",
  "Presenter uses an overly complex diagram",
  "Someone questions the relevance of the topic"
];

const difficultySettings = {
  easy: { name: 'Easy', rows: 3, cols: 3, total: 9, emoji: '🟢' },
  normal: { name: 'Normal', rows: 4, cols: 5, total: 20, emoji: '🟡' },
  hard: { name: 'Hard', rows: 5, cols: 6, total: 30, emoji: '🟠' },
  epic: { name: 'Epic', rows: 6, cols: 6, total: 36, emoji: '🔴' }
};
const themeSettings = {
  classic: { name: 'Classic', primary: '#4285F4', secondary: '#E8F0FE', accent: '#1A73E8', emoji: '💙' },
  fire: { name: 'Fire', primary: '#FF5722', secondary: '#FFF3E0', accent: '#D84315', emoji: '🔥' },
  nature: { name: 'Nature', primary: '#4CAF50', secondary: '#F1F8E9', accent: '#2E7D32', emoji: '🌿' },
  royal: { name: 'Royal', primary: '#9C27B0', secondary: '#F3E5F5', accent: '#7B1FA2', emoji: '👑' },
  neon: { name: 'Neon', primary: '#E91E63', secondary: '#FCE4EC', accent: '#C2185B', emoji: '⚡' }
};

const GAMES_PATH = "bingo-multiplayer/games";
const PLAYERS_PATH = "bingo-multiplayer/players";
const ITEM_PATH = "bingo-multiplayer/items";
const CHAT_PATH = "bingo-multiplayer/chat";
const ITEM_LISTS_PATH = "bingo-multiplayer/itemLists";
let allItems = [];
let currentGame = null;
let currentGameId = null;
let currentPlayerId = null;
let currentPlayerName = null;
let spectatingPlayerId = null;
let spectatingGameId = null;
let allItemLists = {};
let currentListId = "default";

// Live Games/Players display (home page)
function updateLiveGamesSection() {
  const gamesListDiv = document.getElementById('liveGamesList');
  db.ref(GAMES_PATH).once('value').then(gSnap => {
    const games = gSnap.val() || {};
    db.ref(PLAYERS_PATH).once('value').then(pSnap => {
      const allPlayers = pSnap.val() || {};
      let html = "";
      if (Object.keys(games).length === 0) {
        gamesListDiv.innerHTML = "<em>No games currently running! You could create one.</em>";
        return;
      }
      Object.values(games).forEach(game => {
        if (!game.isOpen) return;
        let players = (allPlayers[game.id] ? Object.values(allPlayers[game.id]) : []);
        // Sort players by percent (highest first), then by completedCount
        players = players.sort((a, b) => {
          const aPercent = Math.round((a.completedCount || 0) / (a.totalItems || 1) * 100);
          const bPercent = Math.round((b.completedCount || 0) / (b.totalItems || 1) * 100);
          if (bPercent !== aPercent) return bPercent - aPercent;
          return (b.completedCount || 0) - (a.completedCount || 0);
        });
        html += `<div style="margin-bottom:18px;">
          <b style="color:#000;">${game.name}</b>
          <span style="color:#000;font-size:0.95em;">
            (${game.theme.emoji} ${game.theme.name}, ${game.difficulty.emoji} ${game.difficulty.name})
          </span><br>
          <div class="player-progress-list">` +
            players.map(p => {
              const percent = Math.round((p.completedCount || 0) / (p.totalItems || 1) * 100);
              return `
                <span class="player-progress-bar" onclick="viewPlayerBoard('${game.id}','${p.id}')">
                  ${p.name}
                  <span class="bar-bg">
                    <span class="bar-fill" style="width:${percent}%;"></span>
                  </span>
                  <span style="font-size:0.9em;margin-left:4px;">${percent}%</span>
                </span>
              `;
            }).join('') +
          `</div>
        </div>`;
      });
      if (!html) html = "<em>No games currently running! Ask an admin to create a game.</em>";
      gamesListDiv.innerHTML = html;
    });
  });
}
updateLiveGamesSection();
setInterval(updateLiveGamesSection, 10000);

// Admin manage games tab
function renderAdminGamesList() {
  const target = document.getElementById('adminGamesList');
  target.innerHTML = "Loading...";
  db.ref(GAMES_PATH).once('value').then(gSnap => {
    const games = gSnap.val() || {};
    db.ref(PLAYERS_PATH).once('value').then(pSnap => {
      const allPlayers = pSnap.val() || {};
      if (Object.keys(games).length === 0) {
        target.innerHTML = "<em>No games found</em>";
        return;
      }
      let html = "";
      Object.values(games).forEach(game => {
        const players = (allPlayers[game.id] ? Object.values(allPlayers[game.id]) : []);
        html += `<div class="game-admin-list">
          <b>${game.name}</b> <span style="color:#888;">(${game.theme.emoji} ${game.theme.name}, ${game.difficulty.emoji} ${game.difficulty.name})</span>
          <div class="players">Players: ${
            players.length === 0
              ? '<em>none</em>'
              : players.map(p => `<span style="background:#E8F0FE;border-radius:5px;padding:2px 8px;margin-right:5px;">${p.name}</span>`).join('')
          }</div>
          <div class="admin-btn-row">
            <button class="btn btn-danger" onclick="adminDeleteGame('${game.id}')">Delete Game</button>
            <button class="btn btn-danger" onclick="adminResetPlayers('${game.id}')">Remove All Players</button>
          </div>
        </div>`;
      });
      target.innerHTML = html;
    });
  });
}
function adminDeleteGame(gameId) {
  if (!confirm("Are you sure you want to delete this game and all associated player data?")) return;
  db.ref(GAMES_PATH + "/" + gameId).remove().then(()=>{
    db.ref(PLAYERS_PATH + "/" + gameId).remove().then(renderAdminGamesList);
  });
}
function adminResetPlayers(gameId) {
  if (!confirm("Are you sure you want to remove all players from this game?")) return;
  db.ref(PLAYERS_PATH + "/" + gameId).remove().then(renderAdminGamesList);
}

function showAdminTab(tabId) {
  document.getElementById('createGameTab').style.display = tabId === 'createGameTab' ? 'block' : 'none';
  document.getElementById('manageItemsTab').style.display = tabId === 'manageItemsTab' ? 'block' : 'none';
  document.getElementById('manageListsTab').style.display = tabId === 'manageListsTab' ? 'block' : 'none';
  document.getElementById('gamesListTab').style.display = tabId === 'gamesListTab' ? 'block' : 'none';
  if (tabId === 'gamesListTab') renderAdminGamesList();
  if (tabId === 'manageItemsTab') fetchItemsAndRenderList();
  if (tabId === 'manageListsTab') fetchItemListsAndRender();
}

// --- Item Lists Management ---
function fetchItemListsAndRender() {
  db.ref(ITEM_LISTS_PATH).once('value').then(snap => {
    allItemLists = snap.val() || { default: { id: "default", name: "Default", items: DEFAULT_ITEMS } };
    renderItemListsPanel();
    populateItemListSelectors();
    // If a list is being edited, refresh its panel
    if (currentListId && allItemLists[currentListId]) editItemList(currentListId);
    else document.getElementById('editListPanel').innerHTML = '';
  });
}

function renderItemListsPanel() {
  const panel = document.getElementById('itemListsPanel');
  if (!panel) return;
  let html = Object.values(allItemLists).map(list =>
    `<div style="margin-bottom:8px;">
      <b>${list.name}</b>
      <button class="btn" onclick="editItemList('${list.id}')">Edit</button>
      ${list.id !== 'default' ? `<button class="btn btn-danger" onclick="deleteItemList('${list.id}')">Delete</button>` : '<span style="color:#aaa;font-size:0.95em;">(cannot delete default)</span>'}
    </div>`
  ).join('');
  panel.innerHTML = html;
}

function populateItemListSelectors() {
  const selects = [document.getElementById('adminItemListSelect'), document.getElementById('playerItemListSelect')];
  selects.forEach(sel => {
    if (!sel) return;
    sel.innerHTML = Object.values(allItemLists).map(list =>
      `<option value="${list.id}">${list.name}</option>`
    ).join('');
  });
}

// Add event listener for addListForm if not already present
setTimeout(() => {
  const addListForm = document.getElementById('addListForm');
  if (addListForm && !addListForm._bound) {
    addListForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('newListName').value.trim();
      if (!name) return;
      const id = name.replace(/\W/g, "").toLowerCase() + "_" + Date.now();
      db.ref(`${ITEM_LISTS_PATH}/${id}`).set({ id, name, items: [] }).then(fetchItemListsAndRender);
      document.getElementById('newListName').value = '';
    });
    addListForm._bound = true;
  }
}, 500);

function editItemList(listId) {
  currentListId = listId;
  const list = allItemLists[listId];
  const panel = document.getElementById('editListPanel');
  if (!panel) return;
  let html = `<h4>Edit List: ${list.name}</h4>`;
  html += `<ul id='editListItems'>` + list.items.map((item, idx) =>
    `<li>${item} <button onclick="removeItemFromList('${list.id}',${idx})" class="btn btn-danger">Remove</button></li>`
  ).join('') + `</ul>`;
  html += `<form id='addItemToListForm' style='margin-top:8px;'><input type='text' id='addItemToListInput' placeholder='New Item'><button type='submit' class='btn btn-success'>Add</button></form>`;
  panel.innerHTML = html;
  setTimeout(() => {
    const addItemForm = document.getElementById('addItemToListForm');
    if (addItemForm && !addItemForm._bound) {
      addItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const val = document.getElementById('addItemToListInput').value.trim();
        if (!val) return;
        db.ref(`${ITEM_LISTS_PATH}/${listId}/items`).transaction(items => {
          items = Array.isArray(items) ? items : [];
          if (items.includes(val)) return;
          items.push(val);
          return items;
        }, fetchItemListsAndRender);
        document.getElementById('addItemToListInput').value = '';
      });
      addItemForm._bound = true;
    }
  }, 100);
}

function removeItemFromList(listId, idx) {
  const list = allItemLists[listId];
  if (!list) return;
  list.items.splice(idx, 1);
  db.ref(`${ITEM_LISTS_PATH}/${listId}/items`).set(list.items).then(fetchItemListsAndRender);
}

function deleteItemList(listId) {
  if (listId === 'default') return alert('Cannot delete the default list!');
  if (!confirm('Delete this list?')) return;
  db.ref(`${ITEM_LISTS_PATH}/${listId}`).remove().then(fetchItemListsAndRender);
}

function showAdminPanel() {
  const password = prompt("Enter admin password:");
  if (password !== "admin123") {
    alert("❌ Incorrect password!");
    return;
  }
  showAdminTab('createGameTab');
  document.getElementById('adminGameModal').style.display = 'block';
  fetchItemsAndRenderList();
  fetchItemListsAndRender();
}

// --- Player Create Game Modal logic ---
function showPlayerCreateGameModal() {
  fetchItemListsAndRender();
  document.getElementById('playerCreateGameModal').style.display = 'block';
}
document.getElementById('playerCreateGameForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const gameName = document.getElementById('playerGameName').value.trim();
  const difficulty = document.getElementById('playerDifficulty').value;
  const theme = document.getElementById('playerTheme').value;
  const listId = document.getElementById('playerItemListSelect').value;
  if (!gameName) return alert("Please enter a game name!");
  db.ref(`${ITEM_LISTS_PATH}/${listId}`).once('value').then(snap => {
    const itemsArr = (snap.val() && snap.val().items) || DEFAULT_ITEMS;
    const diff = difficultySettings[difficulty];
    const thm = themeSettings[theme];
    const selectedItems = shuffleArray([...itemsArr]).slice(0, diff.total);
    const gameId = gameName.replace(/\W/g,"") + "_" + Date.now();
    db.ref(`${GAMES_PATH}/${gameId}`).set({
      id: gameId,
      name: gameName,
      difficulty: diff,
      difficultyKey: difficulty,
      theme: thm,
      themeKey: theme,
      items: selectedItems,
      itemListId: listId,
      created: new Date().toISOString(),
      isOpen: true
    }).then(()=>{
      closeModal('playerCreateGameModal');
    });
  });
});

// --- Join Game logic ---
function showJoinGameModal() {
  document.getElementById('joinGameModal').style.display = 'block';
  const listDiv = document.getElementById('availableGamesList');
  listDiv.innerHTML = "Loading games...";
  db.ref(GAMES_PATH).once('value').then(snapshot => {
    const games = snapshot.val() || {};
    let html = "";
    Object.values(games).filter(g=>g.isOpen).forEach(game => {
      html += `<div>
        <input type="radio" name="gameSelect" value="${game.id}" id="game_radio_${game.id}" required>
        <label for="game_radio_${game.id}"><b>${game.name}</b> - ${game.theme.emoji} ${game.theme.name}, ${game.difficulty.emoji} ${game.difficulty.name} [${game.items.length} items]</label>
      </div>`;
    });
    listDiv.innerHTML = html || "<div>No games available. Ask an admin to create one!</div>";
  });
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
function joinSelectedGame(e) {
  e.preventDefault();
  const playerName = document.getElementById('playerNameJoin').value.trim();
  const playerPassword = document.getElementById('playerPasswordJoin').value.trim();
  const gameId = (document.querySelector('input[name="gameSelect"]:checked')||{}).value;
  if (!playerName) return alert("Please enter your name!");
  if (!playerPassword) return alert("Please enter a password!");
  if (!gameId) return alert("Please select a game!");
  joinGame(gameId, playerName, playerPassword);
  closeModal('joinGameModal');
}

function joinGame(gameId, playerName, playerPassword) {
  db.ref(`${GAMES_PATH}/${gameId}`).once('value').then(snapshot => {
    const game = snapshot.val();
    if (!game) return alert("Game not found!");
    // Check for duplicate player name
    db.ref(`${PLAYERS_PATH}/${gameId}`).once('value').then(playersSnap => {
      const players = playersSnap.val() || {};
      const nameExists = Object.values(players).some(
        p => p.name.trim().toLowerCase() === playerName.trim().toLowerCase()
      );
      if (nameExists) {
        alert("A player with that name already exists in this game. Please choose a different name.");
        return;
      }
      currentGame = game;
      currentGameId = gameId;
      currentPlayerName = playerName;
      currentPlayerId = playerName.replace(/\W/g,"") + "_" + Date.now();

      // Fetch the master item list and select a random subset for this player
      db.ref(ITEM_PATH).once('value').then(itemSnap => {
        const masterItems = itemSnap.val() || DEFAULT_ITEMS;
        const numItems = game.items ? game.items.length : (game.difficulty && game.difficulty.total ? game.difficulty.total : 20);
        const playerItems = shuffleArray([...masterItems]).slice(0, numItems);
        db.ref(`${PLAYERS_PATH}/${currentGameId}/${currentPlayerId}`).set({
          id: currentPlayerId,
          name: playerName,
          password: playerPassword,
          completed: Array(playerItems.length).fill(false),
          completedCount: 0,
          totalItems: playerItems.length,
          items: playerItems,
          timestamp: Date.now()
        }).then(() => {
          // Announce in chat
          db.ref(`${CHAT_PATH}/${currentGameId}`).push({
            name: "bingo",
            text: `${playerName} has joined the game!`,
            timestamp: Date.now()
          });
          showGameBoard();
        });
      });
    });
  });
}

function showGameBoard() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('leaderboard').style.display = 'none';
  document.getElementById('gameBoard').style.display = 'block';
  document.body.className = `theme-${currentGame.themeKey}`;
  document.getElementById('chatSection').style.display = 'block';
  db.ref(`${PLAYERS_PATH}/${currentGameId}/${currentPlayerId}`).once('value').then(snap => {
    const player = snap.val();
    currentGame.items = player && player.items ? player.items : currentGame.items;
    currentGame.completed = player && player.completed
      ? player.completed
      : Array(currentGame.items.length).fill(false);
    currentGame.completedCount = player && player.completedCount
      ? player.completedCount
      : 0;
    document.getElementById('gameTitle').textContent =
      `🟦 ${currentGame.name}`;
    document.getElementById('gameSubtitle').textContent =
      `${currentGame.difficulty.emoji} ${currentGame.difficulty.name} • ${currentGame.theme.emoji} ${currentGame.theme.name} • ${currentGame.items.length} items`;
    generateChecklist();
    updateProgress();
    updateLiveLeaderboardUI();
    addInviteButton(); // <-- Add invite button here
  });
  listenForChat();
}

function getInviteLink(gameId) {
  // Use the provided hosting URL with correct casing
  return `https://bleedingrobot.github.io/bingo/Index.html?invite=${encodeURIComponent(gameId)}`;
}

function copyInviteLink(gameId) {
  const link = getInviteLink(gameId);
  navigator.clipboard.writeText(link).then(() => {
    alert('Invite link copied to clipboard!');
  }, () => {
    prompt('Copy this invite link:', link);
  });
}

// Add an Invite button to the game board UI when a game is active
function addInviteButton() {
  const actions = document.querySelector('.game-board-actions');
  if (!actions || document.getElementById('inviteBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'inviteBtn';
  btn.className = 'btn';
  btn.textContent = 'Invite Player';
  btn.onclick = function() { copyInviteLink(currentGameId); };
  actions.appendChild(btn);
}

// On page load, check for invite code in URL and pre-select the game in the join modal
window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const invite = params.get('invite');
  if (invite) {
    showJoinGameModal();
    setTimeout(() => {
      // Try to select the invited game radio button
      const radio = document.getElementById('game_radio_' + invite);
      if (radio) radio.checked = true;
    }, 500);
  }
});

function generateChecklist(readOnly = false) {
  const container = document.getElementById('checklistContainer');
  container.innerHTML = '';
  container.className = `checklist-grid desktop`;
  currentGame.items.forEach((item, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `checklist-item${currentGame.completed[idx] ? ' completed' : ''}`;
    itemDiv.tabIndex = 0; // Make focusable for accessibility
    if (!readOnly) {
      itemDiv.addEventListener('click', () => toggleItem(idx));
      itemDiv.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleItem(idx);
        }
      });
    }
    const label = document.createElement('span');
    label.textContent = item; // Removed numbering
    itemDiv.appendChild(label);
    container.appendChild(itemDiv);
  });
}
function toggleItem(idx) {
  currentGame.completed[idx] = !currentGame.completed[idx];
  currentGame.completedCount = currentGame.completed.filter(Boolean).length;
  db.ref(`${PLAYERS_PATH}/${currentGameId}/${currentPlayerId}`).update({
    completed: currentGame.completed,
    completedCount: currentGame.completedCount,
    timestamp: Date.now()
  });
  updateProgress();
  generateChecklist();
  updateLiveLeaderboardUI();

  // --- Add this block to post a bingo event to chat ---
  const itemText = currentGame.items[idx];
  const action = currentGame.completed[idx] ? "ticked off" : "unticked";
  db.ref(`${CHAT_PATH}/${currentGameId}`).push({
    name: "bingo",
    text: `${currentPlayerName} just ${action}: "${itemText}"`,
    timestamp: Date.now()
  });
}
function handleChecklistToggle(index, checked) {
  currentGame.completed[index] = checked;
  currentGame.completedCount = currentGame.completed.filter(Boolean).length;
  updateProgress();
  // Save the completed array for this player
  db.ref(`${PLAYERS_PATH}/${currentGameId}/${currentPlayerId}/completed`).set(currentGame.completed);
  db.ref(`${PLAYERS_PATH}/${currentGameId}/${currentPlayerId}/completedCount`).set(currentGame.completedCount);
}
function updateProgress() {
  const completed = currentGame.completedCount;
  const total = currentGame.items.length;
  const percentage = Math.round((completed / total) * 100);
  document.getElementById('currentScore').textContent = completed;
  document.getElementById('totalItems').textContent = total;
  document.getElementById('completionPercent').textContent = `${percentage}%`;
  document.getElementById('progressMessage').textContent =
    completed === total ? "🎉 EPIC COMPLETION! YOU'RE A LEGEND! 🎉"
    : completed > total / 2 ? "🔥 You're on fire! Keep going!"
    : "💪 Just getting started!";
}
function updateLiveLeaderboardUI() {
  db.ref(`${PLAYERS_PATH}/${currentGameId}`).on('value', snapshot => {
    const players = snapshot.val() || {};
    const tbody = document.getElementById('liveLeaderboardBody');
    if (tbody) {
      tbody.innerHTML = "";
      const sorted = Object.values(players).sort((a, b) => {
        const ap = (a.completedCount||0)/(a.totalItems||1);
        const bp = (b.completedCount||0)/(b.totalItems||1);
        if (bp !== ap) return bp-ap;
        return (b.completedCount||0)-(a.completedCount||0);
      });
      sorted.forEach(p => {
        const tr = document.createElement('tr');
        if (p.id === currentPlayerId) tr.className = "me";
        const percent = Math.round((p.completedCount||0)/(p.totalItems||1)*100);
        tr.innerHTML = `<td>${p.name}</td>
          <td>${p.completedCount||0}/${p.totalItems}</td>
          <td>${percent}%</td>`;
        tbody.appendChild(tr);
      });
    }
  });
}
function showLeaderboard() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('gameBoard').style.display = 'none';
  document.getElementById('leaderboard').style.display = 'block';
  db.ref(PLAYERS_PATH).once('value').then(snapshot => {
    const allGames = snapshot.val() || {};
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = "";
    let allPlayers = [];
    Object.entries(allGames).forEach(([gameId, players]) => {
      Object.values(players).forEach(player => {
        allPlayers.push({...player, gameId});
      });
    });
    allPlayers.sort((a, b) => {
      const ap = (a.completedCount||0)/(a.totalItems||1);
      const bp = (b.completedCount||0)/(b.totalItems||1);
      if (bp !== ap) return bp-ap;
      return (b.completedCount||0)-(a.completedCount||0);
    });
    allPlayers.forEach((p, idx) => {
      const percent = Math.round((p.completedCount||0)/(p.totalItems||1)*100);
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td>
        <td>${p.name}</td>
        <td>${p.completedCount||0}/${p.totalItems}</td>
        <td>${percent}%</td>
        <td>${p.gameId}</td>
        <td>${p.timestamp ? new Date(p.timestamp).toLocaleDateString() : ""}</td>`;
      tbody.appendChild(tr);
    });
  });
}
function hideLeaderboard() {
  document.getElementById('leaderboard').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'grid';
}
function backToMenu() {
  document.getElementById('gameBoard').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'grid';
  // Hide chat
  document.getElementById('chatSection').style.display = 'none';
  currentGame = null;
  currentGameId = null;
  currentPlayerId = null;
  document.body.className = '';
}
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
window.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Utility: close modals on ESC
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
  }
});

// Utility: autofocus on input when modal is shown
// Only focus the first input if nothing is already focused
// (Prevents focus jumping from password to name or interfering with selects)
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('transitionend', function() {
    if (modal.style.display === 'block') {
      // Only focus if no input or select is already focused in this modal
      const active = document.activeElement;
      if (!modal.contains(active) || (active.tagName !== 'INPUT' && active.tagName !== 'SELECT')) {
        // Prefer focusing the first visible input or select
        const input = modal.querySelector('input[type="text"], input[type="password"], select');
        if (input) input.focus();
      }
    }
  });
});

// Optional: keep UI responsive on resize for checklist
window.addEventListener('resize', function() {
  const container = document.getElementById('checklistContainer');
  if (!container) return;
  container.className = `checklist-grid ${window.innerWidth<800?'mobile':'desktop'}`;
});

function showRejoinForm() {
  const gameSelect = document.getElementById('rejoinGameSelect');
  gameSelect.innerHTML = "<option value=''>Loading...</option>";
  db.ref(GAMES_PATH).once('value').then(gSnap => {
    const games = gSnap.val() || {};
    gameSelect.innerHTML = Object.values(games).map(
      g => `<option value="${g.id}">${g.name}</option>`
    ).join('') || "<option value=''>No games</option>";
    gameSelect.onchange = updateRejoinPlayers;
    updateRejoinPlayers(); // Always update for the first game
  });
  document.getElementById('rejoinGameModal').style.display = 'block';
}

// Update player dropdown when game changes
document.addEventListener('DOMContentLoaded', function() {
  const gameSelect = document.getElementById('rejoinGameSelect');
  if (gameSelect) {
    gameSelect.addEventListener('change', updateRejoinPlayers);
  }
});

function updateRejoinPlayers() {
  const gameId = document.getElementById('rejoinGameSelect').value;
  const playerSelect = document.getElementById('rejoinPlayerName');
  if (!gameId) {
    playerSelect.innerHTML = "<option value=''>Select a game first</option>";
    return;
  }
  db.ref(`${PLAYERS_PATH}/${gameId}`).once('value').then(snap => {
    const players = snap.val() || {};
    playerSelect.innerHTML = Object.values(players).map(
      p => `<option value="${p.id}">${p.name}</option>`
    ).join('') || "<option value=''>No players</option>";
  });
}

function rejoinGame(e) {
  if (e) e.preventDefault();
  const gameId = document.getElementById('rejoinGameSelect').value;
  const playerId = document.getElementById('rejoinPlayerName').value;
  const password = document.getElementById('rejoinPassword').value;
  if (!gameId || !playerId || !password) {
    alert("Please select a game, player, and enter your password.");
    return;
  }
  db.ref(`${PLAYERS_PATH}/${gameId}/${playerId}`).once('value').then(snap => {
    const player = snap.val();
    if (!player) return alert("Player not found.");
    if (player.password !== password) return alert("Incorrect password.");
    // Set current game/player and show game board
    db.ref(`${GAMES_PATH}/${gameId}`).once('value').then(gSnap => {
      currentGame = gSnap.val();
      currentGameId = gameId;
      currentPlayerId = playerId;
      currentPlayerName = player.name;
      closeModal('rejoinGameModal');
      showGameBoard();
    });
  });
}

// Spectate another player's game board
function viewPlayerBoard(gameId, playerId) {
  // If the player is viewing their own board, just go back to editing mode
  if (playerId === currentPlayerId && gameId === currentGameId) {
    backToMyBoard();
    return;
  }
  spectatingPlayerId = playerId;
  spectatingGameId = gameId;
  db.ref(`${PLAYERS_PATH}/${gameId}/${playerId}`).once('value').then(snap => {
    const player = snap.val();
    if (!player) {
      alert("Player not found or their board is not available.");
      return;
    }
    // Try to get the player's items, or fall back to the game's items
    let items = Array.isArray(player.items) && player.items.length
      ? player.items
      : (currentGame && Array.isArray(currentGame.items) ? currentGame.items : []);
    if (!items.length) {
      alert("This player's board is not available.");
      return;
    }
    if (!window._myBoardState) {
      window._myBoardState = {
        items: currentGame.items,
        completed: currentGame.completed,
        completedCount: currentGame.completedCount,
        playerId: currentPlayerId,
        gameId: currentGameId,
        playerName: currentPlayerName
      };
    }
    currentGame.items = items;
    currentGame.completed = Array.isArray(player.completed)
      ? player.completed
      : Array(items.length).fill(false);
    currentGame.completedCount = player.completedCount || 0;
    currentPlayerId = playerId;
    currentGameId = gameId;
    currentPlayerName = player.name;
    generateChecklist(true);
    updateProgress();
    document.getElementById('gameTitle').textContent = `👀 Viewing: ${player.name}'s Board`;
    if (!document.getElementById('backToMyBoardBtn')) {
      const btn = document.createElement('button');
      btn.id = 'backToMyBoardBtn';
      btn.className = 'btn';
      btn.style.marginBottom = '15px';
      btn.textContent = 'Back to My Board';
      btn.onclick = backToMyBoard;
      document.querySelector('.game-header').appendChild(btn);
    }
  });
}

function backToMyBoard() {
  if (!window._myBoardState) return;
  currentGame.items = window._myBoardState.items;
  currentGame.completed = window._myBoardState.completed;
  currentGame.completedCount = window._myBoardState.completedCount;
  currentPlayerId = window._myBoardState.playerId;
  currentGameId = window._myBoardState.gameId;
  currentPlayerName = window._myBoardState.playerName;
  generateChecklist(false);
  updateProgress();
  document.getElementById('gameTitle').textContent = `🟦 ${currentGame.name}`;
  // Remove the back button
  const btn = document.getElementById('backToMyBoardBtn');
  if (btn) btn.remove();
  window._myBoardState = null;
}

/* Remove or comment out this function and interval if you don't want the big bars on the main menu:
function updatePlayerProgressDisplay() {
  const container = document.querySelector('.player-progress-list');
  if (!container) return;
  db.ref(`${PLAYERS_PATH}/${currentGameId}`).once('value').then(snapshot => {
    const players = snapshot.val() || {};
    container.innerHTML = ""; // Clear existing content
    Object.values(players).forEach(player => {
      const percent = Math.round((player.completedCount||0) / (player.totalItems||1) * 100);
      const playerDiv = document.createElement('div');
      playerDiv.className = 'player-progress-bar';
      playerDiv.innerHTML = `
        <span class="player-name">${player.name}</span>
        <div class="progress-container" style="flex-grow: 1; margin: 0 10px;">
          <div class="progress-bar" style="width: ${percent}%; height: 100%; background-color: #4CAF50; border-radius: 4px;"></div>
        </div>
        <span class="player-percent">${percent}%</span>
      `;
      container.appendChild(playerDiv);
    });
  });
}
setInterval(updatePlayerProgressDisplay, 5000); // Update every 5 seconds
*/
// Listen for new messages
function listenForChat() {
  if (!currentGameId) return;
  db.ref(`${CHAT_PATH}/${currentGameId}`).limitToLast(50).on('value', snap => {
    const chatDiv = document.getElementById('chatMessages');
    if (!chatDiv) return;
    const messages = snap.val() || {};
    chatDiv.innerHTML = Object.values(messages).map(msg =>
      msg.name === "bingo"
        ? `<div style="color:#4CAF50;font-weight:bold;"><span>🎲 ${msg.text}</span></div>`
        : `<div><b style="color:#4285F4;">${msg.name}:</b> ${msg.text}</div>`
    ).join('');
    chatDiv.scrollTop = chatDiv.scrollHeight;
  });
}

// Send a message
document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text || !currentPlayerName || !currentGameId) return;
  db.ref(`${CHAT_PATH}/${currentGameId}`).push({
    name: currentPlayerName,
    text,
    timestamp: Date.now()
  });
  input.value = '';
});

// --- ADMIN: Finish Game and Hall of Victors ---

// 1. Finish Game: Store results in DB and mark game as finished
function adminFinishGame(gameId) {
  if (!confirm("Are you sure you want to finish this game? This will archive the results and close the game for new players.")) return;
  // Fetch all players for this game
  db.ref(`${PLAYERS_PATH}/${gameId}`).once('value').then(snap => {
    const players = snap.val() || {};
    // Sort players by percentage (winner to loser)
    const sorted = Object.values(players).map(p => ({
      name: p.name,
      percent: Math.round((p.completedCount||0)/(p.totalItems||1)*100),
      completedCount: p.completedCount||0,
      totalItems: p.totalItems||0,
      timestamp: p.timestamp||0
    })).sort((a, b) => b.percent - a.percent || b.completedCount - a.completedCount);
    // Fetch game info
    db.ref(`${GAMES_PATH}/${gameId}`).once('value').then(gameSnap => {
      const game = gameSnap.val();
      if (!game) return alert("Game not found!");
      // Store results in /bingo-multiplayer/finishedGames/{gameId}
      db.ref(`bingo-multiplayer/finishedGames/${gameId}`).set({
        id: gameId,
        name: game.name,
        theme: game.theme,
        difficulty: game.difficulty,
        items: game.items,
        created: game.created,
        finished: new Date().toISOString(),
        results: sorted
      }).then(() => {
        // Mark game as closed
        db.ref(`${GAMES_PATH}/${gameId}/isOpen`).set(false).then(() => {
          alert("Game finished and results archived!");
          renderAdminGamesList();
        });
      });
    });
  });
}

// 2. Hall of Victors: Show finished games and their results
function showHallOfVictors() {
  document.getElementById('mainMenu').style.display = 'none';
  let hallDiv = document.getElementById('hallOfVictors');
  if (!hallDiv) {
    hallDiv = document.createElement('div');
    hallDiv.id = 'hallOfVictors';
    hallDiv.innerHTML = `
      <h2 style="text-align:center;margin-bottom:18px;">🏆 Hall of Victors 🏆</h2>
      <div id="finishedGamesList" style="display:flex;flex-wrap:wrap;gap:18px;justify-content:center;align-items:stretch;">Loading...</div>
      <div id="finishedGameResults" style="margin-top:24px;"></div>
      <div style="text-align:center;margin-top:30px;"><button class="btn" style="font-size:1.1em;padding:10px 28px;" onclick="hideHallOfVictors()">⬅️ Back to Menu</button></div>
    `;
    document.body.appendChild(hallDiv);
  } else {
    hallDiv.style.display = 'block';
  }
  // Fetch finished games
  db.ref('bingo-multiplayer/finishedGames').once('value').then(snap => {
    const games = snap.val() || {};
    const listDiv = document.getElementById('finishedGamesList');
    if (!Object.keys(games).length) {
      listDiv.innerHTML = '<em>No finished games yet.</em>';
      return;
    }
    listDiv.innerHTML = Object.values(games)
      .sort((a,b)=>new Date(b.finished)-new Date(a.finished))
      .map(g => {
        // Winner info
        const winner = g.results && g.results.length ? g.results[0] : null;
        return `
        <div class='victor-card' style="background:#fff;border-radius:14px;box-shadow:0 2px 10px #0001;padding:18px 22px;min-width:260px;max-width:320px;flex:1 1 260px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;">
          <div style="font-size:1.15em;font-weight:bold;margin-bottom:6px;">${g.name}</div>
          <div style="font-size:0.98em;color:#666;margin-bottom:8px;">${g.theme.emoji} ${g.theme.name} &bull; ${g.difficulty.emoji} ${g.difficulty.name}</div>
          <div style="font-size:0.93em;color:#888;margin-bottom:10px;">${new Date(g.finished).toLocaleDateString()}<br><span style='font-size:0.92em;'>${new Date(g.finished).toLocaleTimeString()}</span></div>
          <div style="margin-bottom:10px;">
            <span style="font-size:1.1em;">🏅 Winner:</span> <span style="font-weight:bold;color:#2e7d32;">${winner ? winner.name : '—'}</span>
          </div>
          <div style="font-size:0.95em;color:#555;margin-bottom:10px;">Players: <b>${g.results ? g.results.length : 0}</b></div>
          <button class="btn" style="margin-top:auto;" onclick="showFinishedGameResults('${g.id}')">View Results</button>
        </div>
        `;
      }).join('');
    document.getElementById('finishedGameResults').innerHTML = '';
  });
}

function showFinishedGameResults(gameId) {
  db.ref(`bingo-multiplayer/finishedGames/${gameId}`).once('value').then(snap => {
    const game = snap.val();
    if (!game) return;
    const results = game.results || [];
    // Medals for top 3 unique places
    const medals = ['🥇','🥈','🥉'];
    let rows = [];
    let lastPercent = null;
    let lastCompleted = null;
    let uniquePlace = 1; // 1-based: 1=first, 2=second, 3=third, ...
    let displayPlace = 1;
    results.forEach((p, i) => {
      if (i === 0) {
        // first row
        lastPercent = p.percent;
        lastCompleted = p.completedCount;
        displayPlace = uniquePlace;
      } else {
        if (p.percent !== lastPercent || p.completedCount !== lastCompleted) {
          uniquePlace++;
          displayPlace = uniquePlace;
        } // else, same place as previous
        lastPercent = p.percent;
        lastCompleted = p.completedCount;
      }
      let style = '';
      if (displayPlace === 1) style = 'background:#e8f5e9;font-weight:bold;color:#2e7d32;';
      else if (displayPlace === 2) style = 'background:#f3e5f5;font-weight:bold;color:#7b1fa2;';
      else if (displayPlace === 3) style = 'background:#fffde7;font-weight:bold;color:#fbc02d;';
      rows.push(`<tr style='${style}'>
        <td style='font-size:1.2em;'>${medals[displayPlace-1]||displayPlace}</td>
        <td>${p.name}</td>
        <td>${p.completedCount}/${p.totalItems}</td>
        <td>${p.percent}%</td>
      </tr>`);
    });
    document.getElementById('finishedGameResults').innerHTML = `
      <div class='victor-results-card' style="background:#fff;border-radius:16px;box-shadow:0 2px 12px #0002;padding:28px 18px 18px 18px;max-width:520px;margin:0 auto 24px auto;">
        <div style="font-size:1.3em;font-weight:bold;text-align:center;margin-bottom:8px;">${game.name}</div>
        <div style="font-size:1.05em;text-align:center;color:#666;margin-bottom:8px;">${game.theme.emoji} ${game.theme.name} &bull; ${game.difficulty.emoji} ${game.difficulty.name}</div>
        <div style="font-size:0.98em;text-align:center;color:#888;margin-bottom:16px;">${new Date(game.finished).toLocaleString()}</div>
        <table class='table' style='width:100%;max-width:420px;margin:0 auto 0 auto;'>
          <thead><tr><th>Place</th><th>Name</th><th>Score</th><th>Percent</th></tr></thead>
          <tbody>
            ${rows.join('')}
          </tbody>
        </table>
        <div style="text-align:center;margin-top:18px;">
          <button class="btn" style="font-size:1em;padding:7px 22px;" onclick="showHallOfVictors()">⬅️ Back to Hall</button>
        </div>
      </div>
    `;
  });
}

// --- ADMIN: Create Fake Game ---
function adminCreateFakeGame() {
  // Pick a random name, difficulty, and theme
  const fakeNames = [
    "Test Game", "Demo Bingo", "Practice Round", "Sample Event", "Fake Game", "Admin Test", "QA Session", "Debug Bingo"
  ];
  const name = fakeNames[Math.floor(Math.random() * fakeNames.length)] + " " + (Math.floor(Math.random()*1000));
  const difficultyKeys = Object.keys(difficultySettings);
  const themeKeys = Object.keys(themeSettings);
  const difficultyKey = difficultyKeys[Math.floor(Math.random() * difficultyKeys.length)];
  const themeKey = themeKeys[Math.floor(Math.random() * themeKeys.length)];
  const diff = difficultySettings[difficultyKey];
  const thm = themeSettings[themeKey];
  db.ref(ITEM_PATH).once('value').then(snap => {
    const itemsArr = snap.val() || DEFAULT_ITEMS;
    const selectedItems = shuffleArray([...itemsArr]).slice(0, diff.total);
    const gameId = name.replace(/\W/g,"") + "_" + Date.now();
    db.ref(`${GAMES_PATH}/${gameId}`).set({
      id: gameId,
      name: name,
      difficulty: diff,
      difficultyKey: difficultyKey,
      theme: thm,
      themeKey: themeKey,
      items: selectedItems,
      created: new Date().toISOString(),
      isOpen: true
    }).then(()=>{
      // Add fake players
      const fakePlayerNames = [
        "Alice", "Bob", "Charlie", "Dana", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"
      ];
      const numPlayers = 3 + Math.floor(Math.random()*3); // 3-5 players
      const usedNames = shuffleArray(fakePlayerNames).slice(0, numPlayers);
      const playerPromises = usedNames.map(playerName => {
        const playerId = playerName + "_" + Math.floor(Math.random()*10000);
        const playerItems = shuffleArray([...selectedItems]);
        // Randomly mark some items as completed
        const completed = playerItems.map(()=>Math.random()<0.4);
        const completedCount = completed.filter(Boolean).length;
        return db.ref(`${PLAYERS_PATH}/${gameId}/${playerId}`).set({
          id: playerId,
          name: playerName,
          password: "fake",
          completed,
          completedCount,
          totalItems: playerItems.length,
          items: playerItems,
          timestamp: Date.now() - Math.floor(Math.random()*1000000)
        });
      });
      Promise.all(playerPromises).then(()=>{
        alert("Fake game created with " + numPlayers + " fake players!\nName: " + name + "\nTheme: " + thm.name + "\nDifficulty: " + diff.name);
        renderAdminGamesList();
      });
    });
  });
}

function hideHallOfVictors() {
  const hallDiv = document.getElementById('hallOfVictors');
  if (hallDiv) hallDiv.style.display = 'none';
  document.getElementById('mainMenu').style.display = 'grid';
  // Optionally clear results
  const resultsDiv = document.getElementById('finishedGameResults');
  if (resultsDiv) resultsDiv.innerHTML = '';
}

// --- Item Lists Management ---
function fetchItemListsAndRender() {
  db.ref(ITEM_LISTS_PATH).once('value').then(snap => {
    allItemLists = snap.val() || { default: { id: "default", name: "Default", items: DEFAULT_ITEMS } };
    renderItemListsPanel();
    populateItemListSelectors();
    // If a list is being edited, refresh its panel
    if (currentListId && allItemLists[currentListId]) editItemList(currentListId);
    else document.getElementById('editListPanel').innerHTML = '';
  });
}

function renderItemListsPanel() {
  const panel = document.getElementById('itemListsPanel');
  if (!panel) return;
  let html = Object.values(allItemLists).map(list =>
    `<div style="margin-bottom:8px;">
      <b>${list.name}</b>
      <button class="btn" onclick="editItemList('${list.id}')">Edit</button>
      ${list.id !== 'default' ? `<button class="btn btn-danger" onclick="deleteItemList('${list.id}')">Delete</button>` : '<span style="color:#aaa;font-size:0.95em;">(cannot delete default)</span>'}
    </div>`
  ).join('');
  panel.innerHTML = html;
}

function populateItemListSelectors() {
  const selects = [document.getElementById('adminItemListSelect'), document.getElementById('playerItemListSelect')];
  selects.forEach(sel => {
    if (!sel) return;
    sel.innerHTML = Object.values(allItemLists).map(list =>
      `<option value="${list.id}">${list.name}</option>`
    ).join('');
  });
}

// Add event listener for addListForm if not already present
setTimeout(() => {
  const addListForm = document.getElementById('addListForm');
  if (addListForm && !addListForm._bound) {
    addListForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('newListName').value.trim();
      if (!name) return;
      const id = name.replace(/\W/g, "").toLowerCase() + "_" + Date.now();
      db.ref(`${ITEM_LISTS_PATH}/${id}`).set({ id, name, items: [] }).then(fetchItemListsAndRender);
      document.getElementById('newListName').value = '';
    });
    addListForm._bound = true;
  }
}, 500);

function editItemList(listId) {
  currentListId = listId;
  const list = allItemLists[listId];
  const panel = document.getElementById('editListPanel');
  if (!panel) return;
  let html = `<h4>Edit List: ${list.name}</h4>`;
  html += `<ul id='editListItems'>` + list.items.map((item, idx) =>
    `<li>${item} <button onclick="removeItemFromList('${list.id}',${idx})" class="btn btn-danger">Remove</button></li>`
  ).join('') + `</ul>`;
  html += `<form id='addItemToListForm' style='margin-top:8px;'><input type='text' id='addItemToListInput' placeholder='New Item'><button type='submit' class='btn btn-success'>Add</button></form>`;
  panel.innerHTML = html;
  setTimeout(() => {
    const addItemForm = document.getElementById('addItemToListForm');
    if (addItemForm && !addItemForm._bound) {
      addItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const val = document.getElementById('addItemToListInput').value.trim();
        if (!val) return;
        db.ref(`${ITEM_LISTS_PATH}/${listId}/items`).transaction(items => {
          items = Array.isArray(items) ? items : [];
          if (items.includes(val)) return;
          items.push(val);
          return items;
        }, fetchItemListsAndRender);
        document.getElementById('addItemToListInput').value = '';
      });
      addItemForm._bound = true;
    }
  }, 100);
}

function removeItemFromList(listId, idx) {
  const list = allItemLists[listId];
  if (!list) return;
  list.items.splice(idx, 1);
  db.ref(`${ITEM_LISTS_PATH}/${listId}/items`).set(list.items).then(fetchItemListsAndRender);
}

function deleteItemList(listId) {
  if (listId === 'default') return alert('Cannot delete the default list!');
  if (!confirm('Delete this list?')) return;
  db.ref(`${ITEM_LISTS_PATH}/${listId}`).remove().then(fetchItemListsAndRender);
}