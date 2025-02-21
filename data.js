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
      `A dedicated Computer Science student skilled in Software, full-stack development and machine learning, eager to create innovative, data-driven applications that push technology’s boundaries.`,
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
      name: 'BloodLytics',
      image: './bloodlytics.png',
      about:
        'Developed an interactive dashboard to explore blood donation statistics, distribution, and donor behavior, highlighting the emergence of various blood groups',
      code: 'https://github.com/hemanth-sunkireddy/BloodLytics',
      view: 'https://krishnanallasingu.github.io/BloodLytics/',

    },
    {
      name: 'Network File System',
      image: './NFS.jpeg',
      about:
        'Developed a basic Network File System with Naming, Storage, and Client Servers, addressing concurrency with TCP/UDP protocols. Implemented file operations (read, write, delete, create, copy, move).',
      code: 'https://github.com/serc-courses/final-project-36',
      // view: 'https://github.com/serc-courses/final-project-36',
    },
    {
      name: 'Advanced xv6',
      image: './xv6.png',
      about:
        'Improved xv6 with new scheduling techniques, system calls and user programs. Analysis of different scheduling algorithms is done using Python',
      code: 'https://github.com/serc-courses/mini-project-3-krishnaNallasingu',
    },
    {
      name: 'C Shell',
      image: './c_shell.png',
      about:
        'Bash-like command interpreter, written in C, with support for process management, piping/redirection and built-in as well as system commands',
      code: 'https://github.com/serc-courses/mini-project-1-krishnaNallasingu',
    },
    {
      name: 'Chalana Chitram - A Relational Database for Queries',
      image: './chalana.webp',
      about:
        'This project stores movie, cast, and crew details in a relational database for easy retrieval. We documented the schema and developed a Python app for database management with effective error handling.',
      code: 'https://github.com/serc-courses/mini-project-1-krishnaNallasingu',
    },
    {
      name: 'AudioFuse',
      image: './audio.jpeg',
      about:
        'Designed and developed ’Audio Fuse” music website with responsive UI, integrating interactive features like play buttons,search, and dynamic album displays.',
      code: 'https://github.com/krishnaNallasingu/Audio_Fuse',
      view: 'https://github.com/krishnaNallasingu/Audio_Fuse',
    }
  ];

  data = { about, skills, projects };
})();
