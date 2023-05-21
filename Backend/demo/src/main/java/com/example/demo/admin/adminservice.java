package com.example.demo.admin;

import com.example.demo.station.station;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;
import java.util.Optional;

@Service
public class adminservice {
    @PersistenceContext
    private EntityManager em;
    private final adminrepo adminrepo;
    @Autowired
    public adminservice(com.example.demo.admin.adminrepo adminrepo) {
        this.adminrepo = adminrepo;
    }


    public List<admin> admins()
    {
        return  adminrepo.findAll();
    }


    public String signup(admin s) {
        if(adminrepo.findAll().isEmpty())
        {
            adminrepo.save(s);
            return "admin added successfully";
        }
        else
        {

            return "an admin already exist";
        }


    }


    public String signin(admin s) {
        if(s.isloggedin==false)
        {

            return "admin already logged in";
        }
        else
        {
            s.isloggedin=true;
            return "Admin Logged in successfully";
        }


    }









}

