const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://twitter.com/FemiOkedeyi',
  title: '.KT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Femi',
  role: 'Android Developer',
  description:
    'I am an Android developer and computer scientist with a strong track record in developing and delivering high-quality Android and Wear OS applications using my skills in Jetpack Compose and Android Architecture Patterns.',
  resume: 'https://drive.google.com/file/d/1lefrp5VDzlylg29v4S5Bm9j2vEE9UL7h/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/oluwafemi-okedeyi/',
    github: 'https://www.linkedin.com/in/oluwafemi-okedeyi/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Devfesttttt',
    description:
      'A wear Os verion of the devfest 2022 mobile application that connects with the mobile app and displays event data',
    stack: ['Jetpack Compose', 'Room Database', 'Wear Os', 'Dagger-Hilt'],
    sourceCode: 'https://github.com/Vader-Femi/Devfesttttt',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Class Konnect',
    description:
      'An Android video call application using Jitsi Meet SDK, aimed to improve E-Learning in educational institutions ',
    stack: ['Jetpack Compose', 'Jitsi Meet SDK', 'Firebase', 'Dagger-Hilt'],
    sourceCode: 'https://github.com/Vader-Femi/ClassKonnect',
    // livePreview: 'https://github.com',
  },
  {
    name: '2FA',
    description:
      'An authentication android app that generates Time-Based One-Time-Passwords for online authentication',
    stack: ['Base32 Encryption & Decryption', 'CI/CD'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Kotlin',
  'Jetpack Compose',
  'Wear OS Development',
  'Android Development',
  'MVVM and MVI Architecture',
  'Dependency Injection',
  'Kotlin Coroutines',
  'Web Sockets',
  'Retrofit',
  'RESTful APIs',
  'Material Design',
  'Python',
  'Ktor',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'oluwafemi.za@gmail.com',
}

export { header, about, projects, skills, contact }
