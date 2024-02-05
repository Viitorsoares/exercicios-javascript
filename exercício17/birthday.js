const dayjs = require("dayjs")

const birthday = (date) => {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'years')
    const nextBirthday = birthday.add(ageInYears + 1, 'years')
    const daysToNextBirthday = nextBirthday.diff(today, "day") 

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias`)
}

birthday("1999-06-19")