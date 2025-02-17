chrome.storage.local.get(["jobData"], (data) => {
    if (!data.jobData) return;

    const { name, email, phone, linkedin, resume } = data.jobData;

    document.querySelectorAll("input, textarea").forEach((field) => {
        if (field.name.toLowerCase().includes("name")) field.value = name;
        if (field.name.toLowerCase().includes("email")) field.value = email;
        if (field.name.toLowerCase().includes("phone")) field.value = phone;
        if (field.name.toLowerCase().includes("linkedin")) field.value = linkedin;
        if (field.name.toLowerCase().includes("resume")) field.value = resume;
    });
});
