<h1>Using Github commandto update</h1>

<h2>Prerequisite</h2>
<h3>SSH keys</h3>
In order to get the git command in terminal command to work, we need to have the SSH to create a secure connnection between the repository and the terminal in the laptop/virtual machines
Firstly, we need to ensure that there is any SSH
https://docs.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys

<br>If there is no existing ssh-key, click on the link below for the documentation on how to make new ssh-keys</br>
https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

<br>Follow the below link for adding the ssh key into the github account</br>
https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account


<h3>Git installation</h3>
Install Git via different platform
<br>Follow the installation steps via different platform via this page</br>
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git



<h2>Process</h2>
<h3>Git version</h3>
<br> We can check the version of Git we are using via typing the following command</br>
git --verion

<br> First go to the folder that you want to make repository and create a git repository via the following command</br>
git init

<br>We can add the files that we want to upload via the following command</br>
git add name_of_file.extension

<br>We can use the following command to know what are the files that we need to commint</br>
git status

<br> Upon confirmation the files that we want to upload, we type the following command</br>
git commit  -m "sentence that you want to type"

<br> We can add remote online github repository to the local repository via the following command</br>
git remote add origin "git@github.com:malcoleo/test-devops.git"
