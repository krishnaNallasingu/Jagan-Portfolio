let data;

(function () {
  const about = {
    typing: [
      'Jagankrishna Nallasingu',
      'a Student at IIIT-H',
      'a Developer',
      'an Enthusiast',
    ],
    resume:
      // 'https://drive.google.com/file/d/1_In16hkJHQmg1fqVkl9ofBi8XQQPl35T/view',
      './Jagan_CV.pdf',

    about: [
      `A dedicated Computer Science student skilled in Software, full-stack development and machine learning, eager to create innovative, data-driven applications that push technology’s boundarie`,
      ``,
    ],
  };

  const skills = [
    { name: 'Javascript', level: 85 },
    { name: 'CSS/SASS', level: 85 },
    { name: 'React JS', level: 80 },
    { name: 'React Native', level: 75 },
    { name: 'ML / AI', level: 60 },
    { name: 'Django', level: 80 },
    { name: 'Express.js', level: 80 },
    { name: 'C/C++', level: 85 },
    { name: 'MySQL', level: 60 },
    { name: 'Shell Scripting', level: 60 },
    { name: 'DS & Algorithms', level: 80 },
    { name: 'OOPs', level: 70 },
    { name: 'DBMS', level: 70 },
    { name: 'Operating Systems', level: 50 },
  ];

  const projects = [
    {
      name: 'AudioFuse',
      image: './audio_fus',
      about:
        'Platform to allow instructors from all over the world to create and teach courses. Students can enrol those courses and learn through them',
      code: 'https://github.com/krishnaNallasingu/Audio_Fuse',
      view: 'https://github.com/krishnaNallasingu/Audio_Fuse',
    },
    {
      name: 'BloodLytics',
      image: './bloodlytics.png',
      about:
        'Management system for an Ad Agency to store and manipulate Actors, Brands, Directors, add contracts between them and much more with a CLI in Python',
      code: 'https://github.com/hemanth-sunkireddy/BloodLytics',
      view: 'https://krishnanallasingu.github.io/BloodLytics/',

    },
    {
      name: 'Network File System',
      image: './NFS.jpeg',
      about:
        'Platform to help students better understand and prepare for the courses they will be taking in upcoming semesters. Look at reviews, learning curve, etc.',
      code: 'https://github.com/serc-courses/final-project-36',
      view: 'https://github.com/serc-courses/final-project-36',
    },
    {
      name: 'C Shell',
      image: './img/C Shell.png',
      about:
        'Bash-like command interpreter, written in C, with support for process management, piping/redirection and built-in as well as system commands',
      code: 'https://github.com/serc-courses/final-project-36',
    },
    {
      // name: 'Advanced xv6',
      // image: './img/xv6.png',
      // about:
      //   'Improved xv6 with new scheduling techniques, system calls and user programs. Analysis of different scheduling algorithms is done using Python',
      // code: 'https://github.com/tichnas/Advanced-xv6',
    },
  ];

  data = { about, skills, projects };
})();
