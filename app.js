// Command Line:-- any interfaces that is used by entering textual commands.
// Terminal:-- Type of Command Line. A text inout and output environment.
// Console:-- Command line Interface used to work with computer.
// shell:--a program running on terminal
// bash:--shell
// Z-shell:--another shell


// basics commands
// ls-list files of present folder
// pwd-print working directory-where we are
// clear--clears screen
// at starting we use to be in home directory
// directory--folder which can have other folders
// Navigation commands(Means Going Inside and outside directories), so we use cd command eg cd "Akash",and (cd..) to return on previous directory
// we can use / to dive into multiple directories. Eg- cd Desktop/Akash.
// similarly to jump back multiple directories we can write command cd ../..

// Paths in Navigation
// Relative Path- eg--cd Desktop/Akash
// Absolute Path--always start with /,works everywhere. eg--cd /users/desktop/Akash
// root directory)(/)-- will bring you to root directory eg--cd /
// home directory(~)--brings to home directory eg--cd ~


// mkdir=make directory--creates folder
//flags=flags are the characters that we pass with commands to modify their behavior, i.e gives extra information.
// manual command--through these we get manual of certain command like "man ls"--give information about ls command,man mkdir--give info about mkdir command.
// q is used to quit from manual command
// some of the flags are (-l)--gives additional Information. Eg-ls -l
// (-a)--include directory entries whose name begin with (.),many hidden files start with (.).
// we can combine (-a) and (-l) by (-la)
// touch comand is used to create files (only if e are trying to change the existing date and time and if file does not exist than it creates)in a directory eg touch index.html( with file extention)


// Deleting files and folders(very sensitive as we cannot retrive the files back).
// rm fileName--removes Files 
// rmdir fileName--removes empty folders
// rm -rf fileName--removes any folders (rf stands for recursive force,these are flags)



// what is git?--Free and Open Source Version control system.(tools that help to track changes in code)
// It's generally used when we want previous code and to collaborate in group system.
// what is Github?--website where we host repositories(folders) online.
// readme.md--(md-markdown)--tells us that what is project about, why it is made ,features , how we can use these projects
//commit--to make changes,first we add(extra step) than commit
// git and gitHub are similar to creation of folders by click(Github) or creation of folders by terminal(git is most similar to Terminal).




// multiple ways to use git--
// >Command line
// >IDE/Code Editors(like VS code)
// >Graphical User Interface client(like GitKraken)
// type git to get git commands
// configuring git(means setting-up git from begining(i.e setting up our details))---->git config --global user.name "Akash Sahu"(by what name we are going to use) and >git config --global user.email "9696______@gmail.com" 
// by git config --list(we will get the user detail)
// clone means dublicate, which is a method to bring Github repo to local system .syntax--git clone https://github.com/akash-sahu1612/dellta-demo(we can make HTTPS link by simply going to code option). So after cloning we will get the required repo or folder into our opened folder.
// status--displays the state of code syntax-git status
// we have four stages of files >untracked(new files which git do not know) >unmodified >modified >staged
// when we add, than file goes to staged state than whhen we finally commit then file goes to unmodified stage. It can be done by "git add filename.extension"
// all files can be added at a time by "git add ."
// add-adds new or changed files in your working directory to the Git staging area.
// commit--It's the record of change--syntax--git commit -m "some message"
// push(git push origin main)-- push local repo content to remote repo.(basically it adds the changes of working repo to github repo)
// init command--creates out simple folder as GitHub repo in our local syatem.Syntax--git init. So it make possible to add, push etc.




// here we will learn how we can send the folder created in system to gitHub
// git remote add origin <--link-->(means creating folder from local syatem remotely, creating new repo or existing repo than adding those files or folders into Github to local System)
// "git remote -v" is there to varify remote
// git branch:-tells us the current branch
// git branch -M main(name)--to rename branch
// than "git push origin main" to push all files into gitHub
// we can write git push only in place of git push origin main by renaming them by git push -u origin main(u means upstream i.e cloud me set karr diya ki in place of that accept these)


// summary(workFlow)
// GitHub--code changes-->commit
// Local git--code changes-->add-->commit-->push




// git Branches--main branch is master branch

// branch commands
// git branch (to check branch)
// git branch -M main (to rename branch)
// git checkout <-branchName--> (to navigatemeans going from branch to another branch)
// git checkout -b <-new branch name-> (to create new branch)
// git branch -d <-branchName-> (to delete branch)