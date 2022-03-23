const switcher = defaultValue => alternative => current => {
    return current === defaultValue ? alternative : defaultValue
}

export default switcher