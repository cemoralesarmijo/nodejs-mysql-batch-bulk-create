create table worldcities
(
    id              int auto_increment,
    city            varchar(100) null,
    city_ascii      varchar(100) null,
    lat             varchar(100) null,
    lng             varchar(100) null,
    country         varchar(100) null,
    iso2            varchar(100) null,
    iso3            varchar(100) null,
    admin_name      varchar(100) null,
    capital         varchar(100) null,
    population      varchar(100) null,
    _id             varchar(100) null,
    createdAt     datetime     null,
    updatedAt     datetime     null,
    constraint worldcities_id_uindex
        unique (id)
);

alter table worldcities
    add primary key (id);


ALTER TABLE worldcities CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
