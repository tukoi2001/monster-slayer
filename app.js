const app = Vue.createApp({
  data() {
    return {
      userName: "",
      userHeart: 100,
      monsterHeart: 100,
      userDamage1: 1,
      userDamage2: 1,
      userDamage3: 1,
      monsterDamage: 1,
      isFighting: false,
      isShowPopup: true,
      countHealth: 0,
      countSkillHealth: 0,
      listMonsters: [
        {
          name: "Ghidorah",
          srcImg: "./image/dragon-icegif.gif",
          altImg: "monster_1",
        },
        {
          name: "Druk",
          srcImg: "./image/dragon_2.gif",
          altImg: "monster_2",
        },
        {
          name: "Slathborg",
          srcImg: "./image/dragon-3.gif",
          altImg: "monster_3",
        },
        {
          name: "Stoor Worm",
          srcImg: "./image/dragon-4.gif",
          altImg: "monster_4",
        },
        {
          name: "Temeraire",
          srcImg: "./image/dragon-5.gif",
          altImg: "monster_5",
        },
        {
          name: "Viserion",
          srcImg: "./image/dragon-6.gif",
          altImg: "monster_6",
        },
        {
          name: "Faranth",
          srcImg: "./image/dragon-7.gif",
          altImg: "monster_7",
        },
        {
          name: "Drakon",
          srcImg: "./image/dragon-8.gif",
          altImg: "monster_8",
        },
      ],
      listCharacters: [
        {
          name: "Erhadt",
          srcImg: "./image/User/erhardt-octopath.gif",
          altImg: "user_1",
          skillQ: "./image/User/erhardt-octopath/SkillQ.png",
          skillW: "./image/User/erhardt-octopath/SkillW.png",
          skillR: "./image/User/erhardt-octopath/SkillR.png",
        },
        {
          name: "ShovelKnight",
          srcImg: "./image/User/giac_dau_si.gif",
          altImg: "user_2",
          skillQ: "./image/User/giac_dau_si/SkillQ.png",
          skillW: "./image/User/giac_dau_si/SkillW.png",
          skillR: "./image/User/giac_dau_si/SkillR.png",
        },
        {
          name: "Arthur",
          srcImg: "./image/User/hiep_si.gif",
          altImg: "user_3",
          skillQ: "./image/User/hiep_si/SkillQ.png",
          skillW: "./image/User/hiep_si/SkillW.png",
          skillR: "./image/User/hiep_si/SkillR.png",
        },
        {
          name: "Honda",
          srcImg: "./image/User/honda_sumo.gif",
          altImg: "user_4",
          skillQ: "./image/User/honda_sumo/SkillQ.png",
          skillW: "./image/User/honda_sumo/SkillW.png",
          skillR: "./image/User/honda_sumo/SkillR.png",
        },
        {
          name: "Rochyn",
          srcImg: "./image/User/rochyn_idle.gif",
          altImg: "user_5",
          skillQ: "./image/User/rochyn_idle/SkillQ.png",
          skillW: "./image/User/rochyn_idle/SkillW.png",
          skillR: "./image/User/rochyn_idle/SkillR.png",
        },
        {
          name: "Alex",
          srcImg: "./image/User/sorcerer.gif",
          altImg: "user_6",
          skillQ: "./image/User/sorcerer/SkillQ.png",
          skillW: "./image/User/sorcerer/SkillR.png",
          skillR: "./image/User/sorcerer/SkillW.png",
        },
        {
          name: "Hakan",
          srcImg: "./image/User/Usfiv_hakan.gif",
          altImg: "user_7",
          skillQ: "./image/User/Usfiv_hakan/SkillQ.png",
          skillW: "./image/User/Usfiv_hakan/SkillW.png",
          skillR: "./image/User/Usfiv_hakan/SkillR.png",
        },
      ],
      levels: [
        {
          key: "D???",
        },
        {
          key: "Trung B??nh",
        },
        {
          key: "Kh??",
        },
      ],
      descriptionMonster: [
        {
          infor: "R???ng 1"
        },
        {
          infor: "R???ng 2"
        },
        {
          infor: "R???ng 3"
        },
      ],
      isShowMonster: false,
      isShowDifficulty: false,
      isShowRules: false,
      selectedMonster: 0,
      isShowCharacter: false,
      selectedCharacter: 0,
      selectedDifficulty: 0,
      isHealth: false,
      isQ: false,
      isMonsterSkill: false,
      isW: false,
      isR: false,
      countMonsterAttacks: 0,
      countQ: 0,
      countW: 0,
      soundQ: new Audio("./sound/skillQ.mp3"),
      soundW: new Audio("./sound/skillW.mp3"),
      soundR: new Audio("./sound/skillR.mp3"),
      healEffect: new Audio("./sound/heal.mp3"),
      soundVictory: new Audio("./sound/victory.mp3"),
      soundDefeat: new Audio("./sound/defeat.mp3"),
      soundMonster: new Audio("./sound/monsterSound.mp3"),
      checkWin: false,
      checkLose: false,
      isShowMenu: true,
    };
  },
  methods: {
    hideMenu() {
      this.isShowMenu = false;
    },
    showMenu() {
      this.isShowMenu = true;
    },
    userAttack1() {
      // this.checkHealths();
      this.hideMenu();
      this.countQ += 1;
      console.log("Q: " + this.countQ)
      this.isFighting = true;
      this.userDamage1 = Math.floor(Math.random() * 6) + 5;
      this.monsterHeart -= this.userDamage1; //this.monsterHeart = this.monsterHeart - this.userDamage
      this.soundQ.play();
      // this.checkHealths();
      setTimeout(() => {
        this.monsterAttack();
        this.checkHealths();
      }, 1500); 
    },
    userAttack2() {
      // this.checkHealths();
      let n = this.countQ;
      console.log("nQ: " + n)
      if (n >= 2) {
        this.countQ -= 2;
        console.log("Q: " + this.countQ)
        this.countW += 1;
        console.log("W: " + this.countW)
        this.wCheck();
        this.isFighting = true;
        this.userDamage2 = Math.floor(Math.random() * 6) + 11;
        this.monsterHeart -= this.userDamage2; //this.monsterHeart = this.monsterHeart - this.userDamage
        this.soundW.play();
        // this.checkHealths();
        setTimeout(() => {
          this.monsterAttack();
          this.checkHealths();
        }, 1500);
        
      } else {
        alert("Ch??a ???????c s??? d???ng k??? n??ng n??y!");
      }
    },
    userAttack3() {
      // this.checkHealths();
      let n = this.countW;
      console.log("nW: " + n)
      if (n >= 2) {
        this.countW -= 2;
        console.log("W: " + this.countW)
        this.rCheck()
        this.isFighting = true;
        this.userDamage3 = Math.floor(Math.random() * 6) + 25;
        this.monsterHeart -= this.userDamage3; //this.monsterHeart = this.monsterHeart - this.userDamage
        this.soundR.play();
        // this.checkHealths();
        setTimeout(() => {
          this.monsterAttack();
          this.checkHealths();
        }, 1500);
        
      } else {
        alert("Ch??a ???????c s??? d???ng k??? n??ng n??y!");
      }
    },
    monsterAttack() {
      if (this.monsterHeart <= 0) {
        this.isMonsterSkill = false;
        this.monsterDamage = 0;
        setTimeout(() => {
          this.checkWin = true;
          this.soundVictory.play();
        }, 500);
      }
      else {
        let n = this.countMonsterAttacks;
        if (this.selectedDifficulty == 0) {
          this.monsterDamage = Math.floor(Math.random() * 4) + 5; // 5 - 8
          if (n % 3 === 0 && this.countMonsterAttacks != 0) {
            this.monsterDamage = (Math.floor(Math.random() * 4) + 5) * 2;
          }
        }
        if (this.selectedDifficulty == 1) {
          this.monsterDamage = Math.floor(Math.random() * 4) + 8; // 8 - 11
          if (n % 3 === 0 && this.countMonsterAttacks != 0) {
            this.monsterDamage = (Math.floor(Math.random() * 4) + 10) * 2;
          }
        }
        if (this.selectedDifficulty == 2) {
          this.monsterDamage = Math.floor(Math.random() * 6) + 11; // 12 - 16
          if (n % 3 === 0 && this.countMonsterAttacks != 0) {
            this.monsterDamage = (Math.floor(Math.random() * 6) + 12) * 2;
          }
        }
        this.countMonsterAttacks += 1;
        this.userHeart -= this.monsterDamage;
        setTimeout(() => {
          this.isFighting = false;
        }, 1200);
        this.checkSkillMonster();
        this.soundMonster.play();
      }
    },
    reload() {
      location.reload();
    },
    checkHealths() {
      if(this.userHeart <= 0) {
        this.userHeart = 0;
        setTimeout(() => {
          this.checkLose = true;
          this.soundDefeat.play();
        }, 800);
      }
      if (this.monsterHeart <= 0) {
        this.monsterHeart = 0;
      }
    },
    checkSkillMonster() {
      this.isMonsterSkill = true;
      setTimeout(() => {
        this.isMonsterSkill = false;
      }, 1000);
    },
    checkEnteredName() {
      if (this.userName == '') {
        alert('Vui l??ng nh???p t??n c???a b???n!!!')
      }
    },
    hidePopup() {
      if (this.userName !== "") {
        this.isShowPopup = !this.isShowPopup;
      }
    },
    showPopup() {
      if (this.userName !== '') {
        this.isShowPopup = !this.isShowPopup
      }
    },
    addHealth() {
      if (this.userHeart > 70 || this.countHealth == 2) {
      } else {
        if (this.selectedDifficulty == 0) {
          this.userHeart += 10;
          this.countHealth += 1;
          if (this.countSkillHealth > 1) {
            this.isHealth = false;
          } else {
            this.isHealth = true;
            setTimeout(() => {
              this.isHealth = false;
            }, 1000);
            this.countSkillHealth += 1;
          }
        }
        if (this.selectedDifficulty == 1) {
          this.userHeart += 15;
          this.countHealth += 1;
          if (this.countSkillHealth > 1) {
            this.isHealth = false;
          } else {
            this.isHealth = true;
            setTimeout(() => {
              this.isHealth = false;
            }, 1000);
            this.countSkillHealth += 1;
          }
        }
        if (this.selectedDifficulty == 2) {
          this.userHeart += 20;
          this.countHealth += 1;
          if (this.countSkillHealth > 1) {
            this.isHealth = false;
          } else {
            this.isHealth = true;
            setTimeout(() => {
              this.isHealth = false;
            }, 1000);
            this.countSkillHealth += 1;
          }
        }
        this.healEffect.play();
      }
    },
    checkUserHeart() {
      if (this.userHeart == 100) {
        alert("B???n kh??ng th??? h???i m??u khi m??u c??n tr??n 100%");
      }
    },
    showCharacter() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowCharacter = false;
        alert("Tr???n ?????u ??ang di???n ra...");
      } else {
        this.isShowCharacter = true;
      }
    },
    showMonsters() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowMonster = false;
        alert("Tr???n ?????u ??ang di???n ra...");
      } else {
        this.isShowMonster = true;
      }
    },
    hideMonster() {
      this.isShowMonster = false;
    },
    handleMonster(index) {
      this.selectedMonster = index;
      this.isShowMonster = false;
    },
    handleCharacter(index) {
      this.selectedCharacter = index;
      this.isShowCharacter = false;
    },
    showDifficulty() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowDifficulty = false;
        alert("Tr???n ?????u ??ang di???n ra...");
      } else {
        this.isShowDifficulty = true;
      }
    },
    handleDifficulty(index) {
      this.selectedDifficulty = index;
      this.isShowDifficulty = false;
    },
    showRules() {
      this.isShowRules = true;
    },
    showBoxes() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowCharacter = false;
        this.isShowDifficulty = false;
        alert("Tr???n ?????u ??ang di???n ra...");
      }
    },
    hideRules() {
      this.isShowRules = false;
    },
    // healthCheck() {
    //   if (this.userHeart > 50) {
    //     this.isHealth = false;
    //   } else {
    //     if (this.countSkillHealth > 1) {
    //       this.isHealth = false;
    //     } else {
    //       this.isHealth = true;
    //       setTimeout(() => {
    //         this.isHealth = false;
    //       }, 1000);
    //       this.countSkillHealth += 1;
    //     }
    //   }
    // },
    qCheck() {
      this.isQ = true;
      setTimeout(() => {
        this.isQ = false;
      }, 1000);
    },
    rCheck() {
      this.isR = true;
      setTimeout(() => {
        this.isR = false;
      }, 1000);
    },
    wCheck() {
      this.isW = true;
      setTimeout(() => {
        this.isW = false;
      }, 1000);
    },
    rePlay() {
      this.showMenu();
      this.checkWin = false;
      this.checkLose = false;
      this.userHeart = 100;
      this.monsterHeart = 100;
      this.userDamage1 = 1;
      this.userDamage2 = 1;
      this.userDamage3 = 1;
      this.monsterDamage = 1;
      this.countHealth = 0;
      this.countSkillHealth = 0;
    },
  },
  computed: {
    monsterSelect() {
      let index = this.selectedMonster;
      return this.listMonsters[index];
    },
    characterSelect() {
      let index = this.selectedCharacter;
      return this.listCharacters[index];
    },
    difficulSelect() {
      let index = this.selectedDifficulty;
      return this.levels[index];
    },
  },
  watch: {
    selectedDifficulty() {
      if (this.selectedDifficulty == 0) {
        setTimeout(() => {
          alert("????? kh?? hi???n t???i: D???");
        }, 500);
      }
      if (this.selectedDifficulty == 1) {
        setTimeout(() => {
          alert("????? kh?? hi???n t???i: Trung B??nh");
        }, 500);
      }
      if (this.selectedDifficulty == 2) {
        setTimeout(() => {
          alert("????? kh?? hi???n t???i: Kh??");
        }, 500);
      }
    },
  },
});

app.mount("#app");

// 1. Th??m h??nh ???nh ng ch??i, qu??i v???t. (Th??m ??c hi???u ???ng t???n c??ng 1 t?? th?? t???t)
// 2. N???u m??u user ho???c monster < 0 th?? hi???n endgame
// 3. Th??m c??c ch???c n??ng ch??i:
// - th??m skill (skill ?????c bi???t, h???i m??u,...)
// - random s??t th????ng t???n c??ng. V?? d???: userDamage: 10 - 20, monster: 15 - 35
// - th??m ????? kh?? (Monster ????nh t???m 3 4 ph??t, th?? c?? 1 ph??t skill ?????c bi???t (x2 dam)). (random theo %, v?? d??? 20% ????nh ch?? m???ng, 5 (1 ph??t ch?? m???ng))
